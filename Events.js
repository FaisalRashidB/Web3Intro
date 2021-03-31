var Tx = require('ethereumjs-tx').Transaction;
const web3=require('web3');
const rpcurl="https://ropsten.infura.io/v3/96c488373a54440583a38812802ae58f";
const Web3=new web3(rpcurl);
//console.log(Web3)

const address = "0x9565fC3A61Bb3665ca1DE6aA97fdFe686AF46410";
const abi=[
	{
		"inputs": [],
		"name": "doSomeWork",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "logString",
		"type": "event"
	},
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

const contract=new Web3.eth.Contract(abi,address);
console.log(contract)
contract.getPastEvents
(
    "AllEvents",{
        fromBlock : 0,
        toBlock : 'latest'
    },
    (err,events)=>{
        console.log("This is events",events)
    }
)