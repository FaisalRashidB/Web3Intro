var Tx=require('ethereumjs-tx');

const Web3=require('web3');
//console.log(Web3);

const rpcurl="HTTP://127.0.0.1:7545";
const web3= new Web3(rpcurl);
//console.log(web3);

const account1="0x47C177333227655Ff2318b25a79dc40Da80465E6";
const account2="0x06bACf81154aC415A7b1D8AC632e76F62169eb62";

const privateKey1="44943ebc0605970673a724ef6b0237fe55718e7eba0e1fe2b0d657b93dbc87fd";
const privateKey2="401e249065d0e7d6efc3ea52888371d860b95ad3a594215babde97ee71193b8a";

const bufferKey1=Buffer.from(privateKey1,'hex');
const bufferKey2=Buffer.from(privateKey2,'hex');

web3.eth.getTransactionCount(account1,(err,txCount)=>{
    let convertedtoHEX=web3.utils.toHex;
    const txObject={
        nounce : convertedtoHEX(txCount),
        to: account2,
        value: convertedtoHEX(web3.utils.toWei('1','ether')),
        gasLimit: convertedtoHEX(21000),
        gasPrice: convertedtoHEX(web3.utils.toWei('10','gwei'))

    }
    const tx = new Tx.Transaction(txObject);
    tx.sign(bufferKey1);

    const serializedTx=tx.serialize();
    const raw = '0x' + serializedTx.toString('Hex');
    console.log(serializedTx)
    console.log(raw)

    web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
        console.log("Hash",txHash);
    })

})
