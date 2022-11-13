const TronWeb = require('tronweb')

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://nile.trongrid.io");
const solidityNode = new HttpProvider("https://nile.trongrid.io");
const eventServer = new HttpProvider("https://nile.trongrid.io");

const ownerprivateKey = "D9598D7346741CAA2FA5A46777CD4A810BFB05A1423F8FE24A8B89F7642819C4"; // user
const userprivateKey = "13a1675e3df35978edd1d7f2ef54b6e9b7067228c8df300b0eae2cd5cac4e942";  // owner
const stealerprivateKey = "80c8c1032c3aeb1e020730e7db437d88e844af333f7f8b7553df1eeec42430df"; // stealer

const ownerAddress = "TSafMJ7VyjPioafQiCL8RywEH31rXHRLRL";  //testsong
const userAddress = "TFJ1EYjdkxX6ASjPhP45tNvDS29qsQn812"; // wallet1
const stealerAddress = "THeTAEcaL2z7RMSQWfr4MYTtb3xEmGkhbQ"; // stealer

const tronWeb_owner = new TronWeb(fullNode, solidityNode, eventServer, ownerprivateKey);  // (테스트를 위한 주석) testsong 지갑
const tronWeb_user = new TronWeb(fullNode, solidityNode, eventServer, userprivateKey);  // (테스트를 위한 주석) Wallet1 지갑
const tronWeb_stealer = new TronWeb(fullNode, solidityNode, eventServer, stealerprivateKey);

const tokenContract = "TUYkCUBR5kr3TQ1EYEz4XxcA55Urkb9duT";// token coontract
const stakeContract = "TY7cegcfNiPb3FrKRmd8eRioWjkoeNy2vG";  // staking contract

////////////////////////////////////////////////////////////////// 세팅을 위한 함수들
async function j_setStakeContract() {
    try {
        let contract = await tronWeb_owner.contract().at(tokenContract);

        let result = await contract.setStakeContract(
           stakeContract
        ).send({
            feeLimit: 10000000000
        }).then(output => {
            console.log('Output:', output);
        });

    } catch(error) {
        console.error("error1", error);
    }
}

async function owner_setApprovalForAll() {
     try {
        let contract = await tronWeb_owner.contract().at(tokenContract);

        let result = await contract.setApprovalForAll(
           stakeContract, true
        ).send({
            feeLimit: 10000000000
        }).then(output => {
            console.log('Output:', output);
        });

    } catch(error) {
        console.error("error2", error);
    }
}

async function j_chargeMaintoken() {
     try {
        let contract = await tronWeb_owner.contract().at(stakeContract);

        let result = await contract.chargeMaintoken(
           100000
        ).send({
            feeLimit: 10000000000
        }).then(output => {
            console.log('Output:', output);
        });

    } catch(error) {
        console.error("error3", error);
    }
}

async function j_transferToStealer() {
    try {
        let contract = await tronWeb_owner.contract().at(tokenContract);

        let result = await contract.safeTransferFrom(
           ownerAddress, stealerAddress, 0, 100000, "0x00"
        ).send({
            feeLimit: 10000000000
        }).then(output => {
            console.log('Output:', output);
        });

    } catch(error) {
        console.error("error4", error);
    }
}

//j_setStakeContract(); // 세팅을 위해 필요한 함수, 이미 세팅함
//owner_setApprovalForAll(); // 세팅을 위해 필요한 함수, 이미 세팅함
//j_chargeMaintoken(); // 세팅을 위해 필요한 함수, 이미 세팅함
//j_transferToStealer(); // 세팅을 위해 필요한 함수, 이미 세팅함

///////////////////////////////////////////////////////////////// 여기까지 세팅의 영역



async function j_mintMushInit() {

    try {
        let contract = await tronWeb_owner.contract().at(stakeContract);

        let tokenRate = 15;  // 튜토리얼 버섯은 B등급으로 고정

        let result = await contract.mintMushInit(
            userAddress,
            "ran0",   //uri
            tokenRate
        ).send({
            feeLimit: 10000000000
        }).then(output => {
            console.log('Output:', output);
        });

    } catch(error) {
        console.error("mintMush error", error);
    }
}

async function user_setApprovalForAll() {
    try {
        let contract = await tronWeb_user.contract().at(tokenContract);

        let result = await contract.setApprovalForAll(
           stakeContract, true
        ).send({
            feeLimit: 10000000000
        }).then(output => {
            console.log('Output:', output);
        });

    } catch(error) {
        console.error("error2", error);
    }
}

async function j_viewMyNFTs(_tokenId) {  // 주석으로 바꿔야 함

     try {
         let tokencontract = await tronWeb_user.contract().at(tokenContract);
         let contract = await tronWeb_user.contract().at(stakeContract)
         let result = new Array();
        //  let counter = await contract.perTotalNFTs().call();
        //  let NFTs = new Array(counter);
        //  for (i = 0; i < counter; i++) {
        //     NFTs[i] = await contract.TotalNFTbalance(userAddress, i).call();
        //  }
        //  for (i = 0; i < counter; i++){
        //      let data = new Object();
        //      data.tokenId = NFTs[i];
        //      data.uri = await tokencontract.uri(NFTs[i]).call();
        //      let _type = await tokencontract.NFTinfo(NFTs[i]).call();
        //      data.type = _type.staking;

        //      result.push(data);
        //  }
        //  let jsonData = JSON.stringify(result);
        //  return jsonData;
        let _balance = await tokencontract.balanceOf(userAddress, _tokenId).call();
        let balance = parseInt(_balance, 16);
         let _uri = await tokencontract.uri(_tokenId).call();
         let _type = await tokencontract.NFTinfo(_tokenId).call();

         let data = new Object();
         data.tokenId = _tokenId;
         data.uri = _uri;
         data.type = _type.staking;
         data.balance = balance;
         result.push(data);

        let jsonData = JSON.stringify(result);

         console.log('balanceOf\n', jsonData);

         return jsonData;

    } catch(error) {
         console.error("balanceOf error", error);
    }
}

async function j_viewMyMainToken(Id) {
    let tokencontract;
    let Address;

    if (Id == 1) {
        tokencontract = await tronWeb_user.contract().at(tokenContract);
        Address = userAddress;
    } else if(Id == 2) {
        tokencontract = await tronWeb_stealer.contract().at(tokenContract);
        Address = stealerAddress;
    }

     try {
         let _balance = await tokencontract.balanceOf(Address, 0).call();
         let balance = Number(_balance.toString())

         console.log('balanceOf(Main token) : ', balance);
         return balance;

    } catch(error) {
         console.error("balanceOf error", error);
    }
}

async function j_mintStealerNFT() {
    try {
        let contract = await tronWeb_owner.contract().at(stakeContract);

        let tokenRate = 15;  // 튜토리얼 버섯은 A등급으로 고정

        let result = await contract.mintStealerNFT(
            stealerAddress,
            "ran100"  // uri 수정 필요
        ).send({
            feeLimit: 10000000000
        }).then(output => {
            console.log('Output:', output);
        });

    } catch(error) {
        console.error("mintStealer error", error);
    }
}

async function stealer_setApprovalForAll() {
    try {
        let contract = await tronWeb_stealer.contract().at(tokenContract);

        let result = await contract.setApprovalForAll(
           stakeContract, true
        ).send({
            feeLimit: 10000000000
        }).then(output => {
            console.log('Output:', output);
        });

    } catch(error) {
        console.error("error2", error);
    }
}

async function CalProbability(sporeRate, randNum) {
    if (sporeRate == 50) {
        if (randNum <= 400)
            return 50;
        else if (randNum <= 1600 && randNum > 400)
            return 30;
        else if (randNum <= 4000 && randNum > 1600)
            return 15;
        else if (randNum <= 7200 && randNum > 4000)
            return 10;
        else
            return 5;

    } else if (sporeRate == 30) {
        if (randNum <= 200)
            return 50;
        else if (randNum <= 800 && randNum > 200)
            return 30;
        else if (randNum <= 2800 && randNum > 800)
            return 15;
        else if (randNum <= 5600 && randNum > 2800)
            return 10;
        else
            return 5;
    } else if (sporeRate == 15) {
        if (randNum <= 100)
            return 50;
        else if (randNum <= 400 && randNum > 100)
            return 30;
        else if (randNum <= 1600 && randNum > 400)
            return 15;
        else if (randNum <= 4100 && randNum > 1600)
            return 10;
        else
            return 5;
    } else if (sporeRate == 10) {
        if (randNum <= 50)
            return 50;
        else if (randNum <= 200 && randNum > 50)
            return 30;
        else if (randNum <= 1000 && randNum > 200)
            return 15;
        else if (randNum <= 3000 && randNum > 1000)
            return 10;
        else
            return 5;
    } else if (sporeRate == 5) {
        if (randNum <= 1)
            return 50;
        else if (randNum <= 100 && randNum > 1)
            return 30;
        else if (randNum <= 500 && randNum > 100)
            return 15;
        else if (randNum <= 1500 && randNum > 500)
            return 10;
        else
            return 5;
    }
}


async function j_MushToSpore(_tokenId) {
    try {
        let contract = await tronWeb_user.contract().at(stakeContract);
        let tokencontract = await tronWeb_user.contract().at(tokenContract);

        let randNum = Math.floor(Math.random() * 10000);

        let MushInfo = await tokencontract.NFTinfo(_tokenId).call();

        let Rate = MushInfo.tokenRate;

        let SporeRate = await CalProbability(Rate, randNum);


        let result = await contract.MushToSpore(
            _tokenId, SporeRate, "ran100"  // uri 수정 필요
        ).send({
            feeLimit: 10000000000
        }).then(output => {
            console.log('Output:', output);
        });

    } catch(error) {
        console.error("MushToSpore error", error);
    }
}

async function j_SporeToMush(_tokenId) {
    try {
        let contract = await tronWeb_user.contract().at(stakeContract);
        let tokencontract = await tronWeb_user.contract().at(tokenContract);

        let randNum = Math.floor(Math.random() * 10000);

        let SporeInfo = await tokencontract.NFTinfo(_tokenId).call();
        let Rate = SporeInfo.tokenRate;

        let MushRate = await CalProbability(Rate, randNum);

        let result = await contract.SporeToMush(
            _tokenId, MushRate, "ran101"  // uri 수정 필요
        ).send({
            feeLimit: 10000000000
        }).then(output => {
            console.log('Output:', output);
        });

    } catch(error) {
        console.error("MushToSpore error", error);
    }
}

async function j_stake(_tokenId) {
     try {
        let contract = await tronWeb_owner.contract().at(stakeContract);

        let result = await contract.stake(
            _tokenId, userAddress
        ).send({
            feeLimit: 10000000000
        }).then(output => {
            console.log('Output:', output);
        });

    } catch(error) {
        console.error("stake error", error);
    }
}

async function j_viewStakeToken() {
    try {
        let contract = await tronWeb_user.contract().at(stakeContract);
        let stakeInfo = await contract.stakes(userAddress).call();

        let data = new Object();

         data.tokenId = Number(stakeInfo[0].toString());
         data.rate = Number(stakeInfo[1].toString());
         data.timestamp = Number(stakeInfo[2].toString());

        let jsonData = JSON.stringify(data);

         console.log('Stake Info \n', jsonData);

        return data;

    } catch(error) {
        console.error("viewStakeToken", error);
    }
}

async function j_unstake() {
    try {
        let contract = await tronWeb_owner.contract().at(stakeContract);

        let result = await contract.unstake(
            userAddress
        ).send({
            feeLimit: 10000000000
        }).then(output => {
            console.log('Output:', output);
        });

    } catch(error) {
        console.error("stake error", error);
    }
}

async function j_steal(_stealTokenId, _amount) {
    try {
        let contract = await tronWeb_stealer.contract().at(stakeContract);

        let result = await contract.steal(
            userAddress, stealerAddress, _amount, _stealTokenId
        ).send({
            feeLimit: 10000000000
        }).then(output => {
            console.log('Output:', output);
        });

    } catch(error) {
        console.error("stake error", error);
    }
}


//////////////////////////////////////////////////////////////////// demo start

//j_mintMushInit();  // 1번째
//user_setApprovalForAll(); // 2번째
//j_viewMyNFTs(3);   // 3번째, 인자 3은 하드코딩, jsonData 리턴, 수정 필요

//j_viewMyMainToken(1); // 유저의 MainToken 양 확인, 숫자 리턴

//j_mintStealerNFT();  // Steal 1번쨰, stealer에게 stealerNFT minting
//stealer_setApprovalForAll(); // Steal 2번째

//j_MushToSpore(3);  // 3은 하드코딩,
//j_viewMyNFTs(3);   // 바뀐거 확인

//j_SporeToMush(3);  // 3은 하드코딩,
//j_viewMyNFTs(3);   // 바뀐거 확인

//j_stake(3);
//j_viewStakeToken();  // Json 데이터로 리턴, tokenId, rate, timestamp 정보가 있다.
//j_unstake();  //
//j_viewMyMainToken(1) // unstake 후에 리워드 확인

//j_stake(3);
//j_viewStakeToken();  // Json 데이터로 리턴, tokenId, rate, timestamp 정보가 있다.
//j_viewMyMainToken(2);  // steal 전에 FT 양 확인
//j_steal(4, 10);  // 아직 테스트 x
//j_viewMyMainToken(2); //  steal 후에 FT 양 확인
