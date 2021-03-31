const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/96c488373a54440583a38812802ae58f_INFURA_API_KEY')


web3.eth.getBlockNumber()
.then(console.log)

web3.eth.getBlock('latest')
.then(console.log)


web3.eth.getBlockNumber().then((latest) => {
    
  for (let i = 0; i < 10; i++) {
    web3.eth.getBlock(latest - i).then(console.log)
  }
})




