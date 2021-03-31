//const Web3=require('web3');
//console.log(Web3);

const rpcurl="HTTP://127.0.0.1:7545";
const web3= new Web3(rpcurl);
console.log(web3);
const address="0x56217f86D50850eFF68F4151eBd0a0263f855Dc5";
web3.eth.getBalance(address,(err,wei)=>{
    console.log("Balance in wei : ",wei)
    let balance = web3.utils.fromWei(wei,"ether");
    console.log("Balance in Ether",balance);

})