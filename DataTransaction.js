var Tx = require('ethereumjs-tx').Transaction;
const web3=require('web3');
const rpcurl="HTTP://127.0.0.1:7545";
const Web3=new web3(rpcurl);
//console.log(Web3)


const account="0x47C177333227655Ff2318b25a79dc40Da80465E6";
const privateKey="44943ebc0605970673a724ef6b0237fe55718e7eba0e1fe2b0d657b93dbc87fd";
const bufferKey1=Buffer.from(privateKey,'hex');
const address="0x8b21A955759dA9D371D5A80Ae4d0fc39E0229DaB";

let abi=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "age_",
				"type": "uint256"
			}
		],
		"name": "setAge",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "age",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAge",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

var contract=new Web3.eth.Contract(abi,address);
//console.log(contract)
Web3.eth.getTransactionCount(account,(err,txCount)=>{
    let txObject={
        nonce : web3.utils.toHex(txCount),
        gasLimit : web3.utils.toHex(800000),
        gasPrice : web3.utils.toHex(web3.utils.toWei("10","gwei")),
        data : contract.methods.setAge(100).encodeABI(),
        to : address


    }

   
    const tx = new Tx(txObject, {chain:'ropsten', hardfork: 'petersburg'})


    
    tx.sign(bufferKey1);

    const serlizeTx=tx.serialize();

    const raw= "0x" +serlizeTx.toString("hex");


    Web3.eth.sendSignedTransaction(raw, (err,txHash)=>{

    
        console.log("This is hash", txHash);
    }).then(reciept=>{
        console.log(reciept)
    })


})