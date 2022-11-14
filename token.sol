// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./ERC1155.sol";
import "./Strings.sol";

contract token is ERC1155 {
    uint256 public constant MAIN = 0;

    struct MushnSpore {
        uint256 tokenRate;
        bool staking;
    }

    mapping(uint256 => string) private _uris;
    mapping(uint256 => uint256) private season;

    mapping(uint256 => MushnSpore) public NFTinfo; // have to change private
    mapping(uint256 => uint256) public stealer;

    address owner;
    address public stakeContract;
    uint256 public currentSeason;
    uint256 totalSpore;
    uint256 totalMush;
    uint256 Tid;

    constructor()
        public
        ERC1155(
            "https://bafybeibs5dtqcvzu6obudekkleamrxafnyatqndsg5un5nuknqyuxdklvq.ipfs.nftstorage.link/{id}.png"
        )
    {
        _mint(msg.sender, MAIN, 10e10, "");
        owner = msg.sender;
        currentSeason = 1;
        totalSpore = 0;
        totalMush = 0;
        Tid = 0;
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner || msg.sender == stakeContract,
            "Permission erR0!"
        );
        _;
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        return (_uris[tokenId]);
    }

    function setTokenUri(
        uint256 tokenId,
        string memory uri,
        uint256 opt
    ) public onlyOwner {
        //require(bytes(_uris[tokenId]).length == 0, "Cannot set uri twice");
        if (opt == 1) _uris[tokenId] = uri;
        else {
            _uris[tokenId] = string(
                abi.encodePacked(
                    "https://bafybeibs5dtqcvzu6obudekkleamrxafnyatqndsg5un5nuknqyuxdklvq.ipfs.nftstorage.link/",
                    Strings.toString(Tid),
                    ".png"
                )
            );
            Tid += 1;
        }
    }

    function setStakeContract(address _contract) public onlyOwner {
        stakeContract = _contract;
    }

    // need onlyowner, for tutorial function
    function mintMush(
        address _account,
        uint256 _tokenId,
        string memory _tokenuri,
        uint256 _tokenRate,
        uint256 _opt
    ) public onlyOwner {
        _mint(_account, _tokenId, 1, "");
        setTokenUri(_tokenId, _tokenuri, _opt);

        NFTinfo[_tokenId].tokenRate = _tokenRate;
        NFTinfo[_tokenId].staking = true;

        season[_tokenId] = currentSeason;
        totalMush++;
        //setApprovalForAll(stakeContract, true);  // need edit
    }

    function _MushToSpore(
        uint256 _tokenId,
        uint256 _tokenRate,
        string memory _tokenuri,
        uint256 _opt
    ) public onlyOwner {
        require(NFTinfo[_tokenId].staking == true, "not Mushroom");

        NFTinfo[_tokenId].staking = false;
        NFTinfo[_tokenId].tokenRate = _tokenRate;
        setTokenUri(_tokenId, _tokenuri, _opt); // if not use ipfs, need edit from 0 to 1
        totalMush--;
        totalSpore++;
    }

    function _SporeToMush(
        uint256 _tokenId,
        uint256 _tokenRate,
        string memory _tokenuri,
        uint256 _opt
    ) public onlyOwner {
        require(NFTinfo[_tokenId].staking == false, "not Spore");

        NFTinfo[_tokenId].staking = true;
        NFTinfo[_tokenId].tokenRate = _tokenRate;
        setTokenUri(_tokenId, _tokenuri, _opt); // if not use ipfs, need edit from 0 to 1
        totalMush++;
        totalSpore--;
    }

    function mintStealer(
        address _account,
        uint256 _tokenId,
        string memory _tokenuri,
        uint256 _opt
    ) public {
        require(balanceOf(_account, 0) > 10, "Not enough Main token"); // 10 is price
        _burn(_account, 0, 10);

        _mint(_account, _tokenId, 1, "");
        setTokenUri(_tokenId, _tokenuri, _opt);
        stealer[_tokenId] = 1; // true 의미, 혹시 몰라서 일단 정수로 설정
    }

    function viewTokenRate(uint256 _tokenId) public returns (uint256) {
        return NFTinfo[_tokenId].tokenRate;
    }

    function isMush(uint256 _tokenId) public returns (bool) {
        return NFTinfo[_tokenId].staking;
    }

    function viewSeason(uint256 _tokenId) public returns (uint256) {
        return season[_tokenId];
    }

    function updateSeason() public onlyOwner {
        currentSeason++;
    }

    function checkStealer(uint256 _stealtokenId) public view returns (bool) {
        return stealer[_stealtokenId] == 1;
    }

    function burn(
        address _account,
        uint256 _tokenId,
        uint256 _amount
    ) public {
        _burn(_account, _tokenId, _amount);
    }

    // function mintSpore(address _account, uint _tokenId, string memory _tokenuri, uint256 _tokenRate) public onlyOwner {
    //     _mint(_account, _tokenId, 1, "");
    //     setTokenUri(_tokenId, _tokenuri, 0);

    //     NFTinfo[_tokenId].tokenRate = _tokenRate;
    //     NFTinfo[_tokenId].staking = false;

    //     season[_tokenId] = currentSeason;
    //     totalSpore++;
    //     //setApprovalForAll(stakeContract, true);  // need edit
    // }
}
