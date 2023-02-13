const Web3 = require('web3');

const web3 = new Web3('https://eth-goerli.g.alchemy.com/v2/XdE1v9zVDSoRe6S5013cteykw1ZDC0u9');

async function main(){   
    await web3.eth.getBlock('latest', function(err, block){
        if (block.gasUsed > 15_000_000) {
            console.log("currently in use: " + block.gasUsed + " price increases");
        } else {
            console.log("currently in use: " + block.gasUsed + " price decreases");
        }
    })
}

main();