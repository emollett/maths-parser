function evaluateInput(input) {
    let parsedInput = parseInput(input);
    (parsedInput.includes("e") && parsedInput.includes("f")) && (parsedInput = evaluateBrackets(parsedInput))
    const product = evaluateArithmetic(parsedInput)
    return product
}

function parseInput(input) {
    let parsedInput = []
    while(input.length > 0){
        parsedInput.push((parseInt(input, 10) || input[0]))
        input = input.slice(parsedInput[parsedInput.length -1].toString().length)
    }
    return parsedInput
  }

function evaluateBrackets(input){
    const openingBracket = input.lastIndexOf("e")
    const closingBracket = (input.slice(openingBracket)).indexOf("f")
    const bracketContents = input.slice(openingBracket+1, openingBracket+closingBracket)
    const product = evaluateArithmetic(bracketContents)
    input.splice(openingBracket, closingBracket+1, product[0]);
    (input.includes("e") && input.includes("f")) && (input = evaluateBrackets(input))
    return input
}

function evaluateArithmetic(input){
    let i=1
    while(i<input.length){
        const operator = input[i]
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