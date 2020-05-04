const { evaluateInput } = require('./mathsParser');

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Enter string expression to parse, or type exit to exit: "
  })

readline.prompt();

readline.on('line', (line) => {
    switch (line.trim()) {
      case 'exit':
        readline.close()
        break;
      default:
        product = evaluateInput(line)
        if(product.length != 1){product = "Your input was in the wrong format"}
        console.log(`${product}`)
        break;
    }
    readline.prompt();
  })

readline.on("close", function() {
    process.exit(0);
});