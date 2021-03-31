//const Web3=require('web3');

const rpcurl="https://ropsten.infura.io/v3/96c488373a54440583a38812802ae58f";

const web3= new Web3(rpcurl);
console.log(web3);

const address="0xdde3883D646ac8b74A0Fa79B8AE2763c01703f5d";

web3.eth.getBalance(address,(err,wei)=>{
    console.log("Balance in wei",wei)
    let balance=web3.utils.fromWei(wei,"ether");
    console.log("Balance in ether",balance)

})