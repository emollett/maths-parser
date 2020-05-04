const { evaluateInput } = require('./mathsParser');

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
readline.question(`Enter string expression to parse `, (string) => {
    product = evaluateInput(string)
    if(product.length != 1){product = "Your input was in the wrong format"}
    console.log(`${product}`)
    readline.close()
})

readline.on("close", function() {
    process.exit(0);
});