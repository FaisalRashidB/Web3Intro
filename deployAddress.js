var Tx = require('ethereumjs-tx').Transaction;
const web3=require('web3');
const rpcurl="HTTP://127.0.0.1:7545";
const Web3=new web3(rpcurl);
//console.log(Web3)


const account="0x47C177333227655Ff2318b25a79dc40Da80465E6";
const privateKey="44943ebc0605970673a724ef6b0237fe55718e7eba0e1fe2b0d657b93dbc87fd";
const bufferKey1=Buffer.from(privateKey,'hex');

const bytecode=	
	 "608060405234801561001057600080fd5b50610172806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063262a9dff14610046578063967e6e6514610064578063d5dcf12714610082575b600080fd5b61004e61009e565b60405161005b9190610100565b60405180910390f35b61006c6100a4565b6040516100799190610100565b60405180910390f35b61009c600480360381019061009791906100c8565b6100a9565b005b60005481565b600090565b8060008190555050565b6000813590506100c281610125565b92915050565b6000602082840312156100da57600080fd5b60006100e8848285016100b3565b91505092915050565b6100fa8161011b565b82525050565b600060208201905061011560008301846100f1565b92915050565b6000819050919050565b61012e8161011b565b811461013957600080fd5b5056fea2646970667358221220e2148ca01f9c8c9a38ffedec862dcbcbe83383fd9a8dff65796d6d5dfddf977864736f6c63430008010033";
   const bufferByteCode=Buffer.from(bytecode,"hex");       
Web3.eth.getTransactionCount(account,(err,txCount)=>{
    let txObject={
        nonce : web3.utils.toHex(txCount),
        gasLimit : web3.utils.toHex(800000),
        gasPrice : web3.utils.toHex(web3.utils.toWei("10","gwei")),
        data : bufferByteCode


    }
    console.log("This is txObject",txObject);

   
    const tx = new Tx(txObject, {chain:'ropsten', hardfork: 'petersburg'})


    
    tx.sign(bufferKey1);

    const serlizeTx=tx.serialize();

    const raw= "0x" +serlizeTx.toString("hex");

    console.log(raw)

    Web3.eth.sendSignedTransaction(raw, (err,txHash)=>{
        console.log(err)
    
        console.log("This is hash", txHash);
    })


})