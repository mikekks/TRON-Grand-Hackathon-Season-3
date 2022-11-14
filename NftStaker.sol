// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "./ERC1155Receiver.sol";

contract NftStaker {
    IERC1155 public parentNFT;

    struct Stake {
        uint256 tokenId;
        uint256 rate;
        uint256 timestamp;
    }

    //  SS = 50
    //  S = 30
    //  A = 15
    //  B = 10
    //  C = 5

    mapping(uint256 => uint256) public seasonMushSupply;
    uint256 totalMaintoken;
    uint256 public Curseason = 1;
    uint256 public stealpossible = 30;

    address owner;
    uint256 counterNFT;

    mapping(address => Stake) public stakes; // stake details

    mapping(address => uint256[]) public TotalNFTbalance;

    mapping(address => uint256) public rewards;

    event stealevent(uint256 isSuccess);
    event isStealer(uint256 isSteal);

    constructor() {
        parentNFT = IERC1155(0xE9151e0833467D3F4f54Ddf46011E06CE98C616b); // Change it to your NFT contract addr
        totalMaintoken = 10000; // if parent contract change init minting, this var must change same
        owner = msg.sender;
        counterNFT = 3; // tokenid start 3
    }

    modifier updateReward(address _account) {
        uint256 rewardPerTokenStored = rewards[_account];
        uint256 addReward = rewardPerToken(_account);
        rewardPerTokenStored += addReward;
        totalMaintoken += addReward;

        rewards[_account] = rewardPerTokenStored;

        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Permission erR1!");
        _;
    }

    function chargeMaintoken(uint256 _amount) public onlyOwner {
        parentNFT.safeTransferFrom(
            msg.sender,
            address(this),
            0,
            _amount,
            "0x00"
        );
    }

    function mintMushInit(
        address _account,
        string calldata _tokenuri,
        uint256 _tokenRate,
        uint256 _opt
    ) public onlyOwner {
        parentNFT.mintMush(_account, counterNFT, _tokenuri, _tokenRate, _opt);
        TotalNFTbalance[_account].push(counterNFT);
        counterNFT++;
        seasonMushSupply[Curseason] += 1;
    }

    function perTotalNFTs(address _account) public view returns (uint256) {
        return TotalNFTbalance[_account].length;
    }

    function MushToSpore(
        uint256 _tokenId,
        uint256 _tokenRate,
        string memory _uri,
        uint256 _opt
    ) public {
        require(
            parentNFT.balanceOf(msg.sender, _tokenId) > 0,
            "Not have SporeNFT"
        );

        parentNFT._MushToSpore(_tokenId, _tokenRate, _uri, _opt);
        seasonMushSupply[Curseason] -= 1;
    }

    function SporeToMush(
        uint256 _tokenId,
        uint256 _tokenRate,
        string memory _uri,
        uint256 _opt
    ) public {
        require(
            parentNFT.balanceOf(msg.sender, _tokenId) > 0,
            "Not have SporeNFT"
        );

        parentNFT._SporeToMush(_tokenId, _tokenRate, _uri, _opt);
        seasonMushSupply[Curseason] += 1;
    }

    function rewardPerToken(address _account) private returns (uint256) {
        // private modifier !

        // need to change from 10 to anyNumber
        require(
            block.timestamp - stakes[_account].timestamp > 10,
            "cycle cool time not yet erR!"
        );

        uint256 pertokenSeason = parentNFT.viewSeason(stakes[_account].tokenId);

        // * 1e18 와 같은 수식 필요 (수치 조정 필요)
        return
            (stakes[_account].rate *
                (block.timestamp - stakes[_account].timestamp)) /
            seasonMushSupply[pertokenSeason];
    }

    function stake(uint256 _tokenId, address _account) public onlyOwner {
        require(stakes[_account].tokenId == 0, "unstack require");
        require(
            parentNFT.balanceOf(_account, _tokenId) != 0,
            "Not token Owner!"
        );
        require(parentNFT.isMush(_tokenId) == true, "Not Mush");

        uint256 rate = parentNFT.viewTokenRate(_tokenId);

        parentNFT.safeTransferFrom(
            _account,
            address(this),
            _tokenId,
            1,
            "0x00"
        );
        stakes[_account] = Stake(_tokenId, rate, block.timestamp);
    }

    // once unstack take place, All stacking amount withdraw & get reward
    function unstake(address _account) public updateReward(_account) onlyOwner {
        require(stakes[_account].tokenId > 0, "No Stake erR!");

        parentNFT.safeTransferFrom(
            address(this),
            _account,
            stakes[_account].tokenId,
            1,
            "0x00"
        );
        delete stakes[_account];

        getReward(_account); // unstake -> getReward
    }

    // unstake -> getReward
    function getReward(address _account) private {
        uint256 reward = rewards[_account];
        require(reward > 0, "No reward erR!");
        rewards[_account] = 0;
        parentNFT.safeTransferFrom(address(this), _account, 0, reward, "0x00");
    }

    function mintStealerNFT(
        address _account,
        string memory _uri,
        uint256 _opt
    ) public onlyOwner {
        parentNFT.mintStealer(_account, counterNFT, _uri, _opt);
        counterNFT++;
    }

    function steal(
        address _owner,
        address _stealer,
        uint256 _amount,
        uint256 _stealtokenId
    ) public updateReward(_owner) returns (bool) {
        require(
            parentNFT.balanceOf(_stealer, _stealtokenId) > 0,
            "Not have Stealer Token1"
        );
        require(
            parentNFT.checkStealer(_stealtokenId),
            "Not have Stealer Token2"
        );
        require(
            parentNFT.balanceOf(_stealer, 0) > _amount,
            "Not enough Main token"
        );

        require((rewards[_owner] * 20) / 100 > _amount, "excess steal amount");

        uint256 randNonce = 0;
        uint256 random = uint256(
            keccak256(abi.encodePacked(block.timestamp, msg.sender, randNonce))
        ) % 100;

        if (random < stealpossible) {
            // steal success
            parentNFT.safeTransferFrom(
                address(this),
                _stealer,
                0,
                _amount,
                "0x00"
            );
            rewards[_owner] -= _amount;
            emit stealevent(1);
            return true;
        } else {
            // steal fail
            parentNFT.burn(_stealer, 0, _amount);
            parentNFT.burn(_stealer, _stealtokenId, 1);
            totalMaintoken -= _amount;
            emit stealevent(0);
            return false;
        }
    }

    function seasonUpdate() public onlyOwner {
        Curseason++;
    }

    // function expectReward(address _account) public updateReward(_account) returns(uint256){

    // }

    // contract가 토큰 받을 때 호출되는 함수
    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) external returns (bytes4) {
        return
            bytes4(
                keccak256(
                    "onERC1155Received(address,address,uint256,uint256,bytes)"
                )
            );
    }
}

interface IERC1155 {
    function uri(uint256 tokenId) external view returns (string memory);

    function setTokenUri(
        uint256 tokenId,
        string memory uri,
        uint256 opt
    ) external;

    function setStakeContract(address _contract) external;

    function mintMush(
        address _account,
        uint256 _tokenId,
        string memory _tokenuri,
        uint256 _tokenRate,
        uint256 _opt
    ) external;

    function mintStealer(
        address _account,
        uint256 _tokenId,
        string memory _tokenuri,
        uint256 _opt
    ) external;

    function _SporeToMush(
        uint256 _tokenId,
        uint256 _tokenRate,
        string memory _tokenuri,
        uint256 _opt
    ) external;

    function _MushToSpore(
        uint256 _tokenId,
        uint256 _tokenRate,
        string memory _tokenuri,
        uint256 _opt
    ) external;

    function viewTokenRate(uint256 _tokenId) external returns (uint256);

    function isMush(uint256 _tokenId) external returns (bool);

    function checkStealer(uint256 _stealtokenId) external view returns (bool);

    function burn(
        address _account,
        uint256 _tokenId,
        uint256 _amount
    ) external;

    function viewSeason(uint256 _tokenId) external returns (uint256);

    function updateSeason() external;

    function balanceOf(address account, uint256 id)
        external
        view
        returns (uint256);

    function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids)
        external
        view
        returns (uint256[] memory);

    function setApprovalForAll(address operator, bool approved) external;

    function isApprovedForAll(address account, address operator)
        external
        view
        returns (bool);

    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes calldata data
    ) external;

    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] calldata ids,
        uint256[] calldata amounts,
        bytes calldata data
    ) external;
}
