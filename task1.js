const Web3 = require('web3');

//const web3 = new Web3('https://eth-goerli.g.alchemy.com/v2/XdE1v9zVDSoRe6S5013cteykw1ZDC0u9');

const readlineSync = require('readline-sync');

async function main(){
    const web3 = new Web3(adrNode);

    web3.eth.defaultAccount = adrAccount;
    web3.eth.defaultBlock = defBlock;
    web3.eth.defaultHardFork = defHardfork;
    web3.eth.defaultChain = defChain;
    
    console.log(web3);
}

let adrNode = readlineSync.question('Укажите адрес узла к которому необходимо подключится: ');
let adrAccount = readlineSync.question('Укажите адрес аккаунта по умолчанию: ');
let defBlock = readlineSync.question('Укажите блок по умолчанию: ');
let defHardfork = readlineSync.question('Укажите хардфорк по умолчанию: ');
let defChain = readlineSync.question('Укажите блок цепочку по умолчанию: ');
main();
