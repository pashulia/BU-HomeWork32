const Web3 = require('web3');

//https://eth-goerli.g.alchemy.com/v2/XdE1v9zVDSoRe6S5013cteykw1ZDC0u9

const readlineSync = require('readline-sync');

async function main(){
    const web3 = new Web3(adrNode);
    
    let info = await web3.eth.getNodeInfo()
    console.log("инфрмация об узле: " + info)

    let chain = await web3.eth.getChainId()
    console.log("id цепочки: " + chain)

    let vers = await web3.eth.getProtocolVersion()
    console.log("версия протокола: " + vers)

    let sync  = await web3.eth.isSyncing()
    console.log("синхронизируется ли узел в данный момент: " + sync)
}

let adrNode = readlineSync.question('Укажите адрес узла к которому необходимо подключится: ');
main();
