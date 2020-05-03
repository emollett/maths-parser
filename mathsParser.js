const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter string expression to parse `, (string) => {
    product = evaluateInput(string)
    if(product.length != 1){product = "your input was in the wrong format"}
    console.log(`Answer is ${product}`)
    readline.close()
  })

function evaluateInput(input) {
    parsedInput = parseInput(input);
    (parsedInput.includes("e") && (parsedInput = evaluateBrackets(parsedInput)))
    product = evaluateArithmetic(parsedInput)
    return product
}

function parseInput(input) {
    parsedInput = []
    while(input.length > 0){
        parsedInput.push((parseInt(input, 10) || input[0]))
        input = input.slice(parsedInput[parsedInput.length -1].toString().length)
    }
    return parsedInput
  }

function evaluateBrackets(input){
    bracketContents = input.slice(input.indexOf("e")+1, input.lastIndexOf("f"));
    (bracketContents.includes("e") && (bracketContents = evaluateBrackets(bracketContents)))
    product = evaluateArithmetic(bracketContents)
    input.splice(input.indexOf("e"), (input.lastIndexOf("f")-input.indexOf("e")+1), product[0])
    return input
}

function evaluateArithmetic(input){
    i=0
    while(i<input.length){
        let operator = input[i]
        switch(operator) {
            case "a":
                input.splice(i-1, 3, (input[i-1]+input[i+1]))
                break
            case "b":
                input.splice(i-1, 3, (input[i-1]-input[i+1]))
                break
            case "c":
                input.splice(i-1, 3, (input[i-1]*input[i+1]))
                break
            case "d":
                input.splice(i-1, 3, (input[i-1]/input[i+1]))
                break
            default:
                i++
        }
    }
    return input
}

module.exports = { parseInput, evaluateInput }