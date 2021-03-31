const rpcurl="https://ropsten.infura.io/v3/96c488373a54440583a38812802ae58f";

const web3= new Web3(rpcurl);
console.log(web3);

const address="0x4440593854daB89b29cF926e810838f2AF2BF684";
const abi=[
	{
		"inputs": [],
		"name": "getAge",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
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
	}
]
let contract=new web3.eth.Contract(abi,address);

console.log("contract",contract);

contract.methods.getAge().call((err,result)=>{
    console.log("This is updated Age",result)
})