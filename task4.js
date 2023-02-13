const Web3 = require('web3');

const web3 = new Web3('https://eth-goerli.g.alchemy.com/v2/XdE1v9zVDSoRe6S5013cteykw1ZDC0u9');

const readlineSync = require('readline-sync');

function sleep(milliseconds) {      
    const date = Date.now();        
    let currentDate = null;      
    do {              
        currentDate = Date.now();      
    } while (currentDate - date < milliseconds);
} 

async function main(){   
    await web3.eth.getBlock('latest', function(err, block){
        if (block.gasUsed > 15_000_000) {
            console.log("currently in use: " + block.gasUsed + " price increases");
        } else {
            console.log("currently in use: " + block.gasUsed + " price decreases");
        }
    })

    let taxGas = readlineSync.question("Введите целевую базовую цену газ: ");

    let start = await web3.eth.getBlockNumber();
    let end = start + 3;

    while (start <= end) {
        sleep(10000)
        let newBlock = await web3.eth.getBlock('latest')
        if (newBlock.number > start) {
            console.log(`number: ${newBlock.number} baseFeePerGas: ${newBlock.baseFeePerGas}`)
            if (newBlock.baseFeePerGas <= taxGas) {
                console.log('success')
                return;
            }
            start = newBlock.number 
        } 
        console.log("Gas is too expensive. try again later");
    }
}

main();