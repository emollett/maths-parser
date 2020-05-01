function evaluateInput(input) {
    parsedInput = parseInput(input);
    (parsedInput.includes("e") && (parsedInput = evaluateBrackets(parsedInput)))
    summedInput = evaluateSummation(parsedInput)
    product = evaluateProduct(summedInput)
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
    everythingInBracket = input.slice(input.indexOf("e")+1, input.indexOf("f"))
    summedInput = evaluateSummation(everythingInBracket)
    product = evaluateProduct(summedInput)
    input.splice(input.indexOf("e"), input.indexOf("f")-1, product[0])
    return input
}

function evaluateSummation(input){
    let i=0;
    while(i<input.length){
        if(input[i] === "a"){
            let sum = addingFunction(input[i-1], input[i+1])
            input.splice(input[i], 3, sum)
        }else if(input[i] === "b"){
            let sum = subtractingFunction(input[i-1], input[i+1])
            input.splice(input[i], 3, sum)
        }else{
            i++
        }
    };
    return input
}

function evaluateProduct(input){
    let i = 0;
    while(i<input.length){
        if(input[i] === "c"){
            let product = multiplyingFunction(input[i-1], input[i+1])
            input.splice(input[i], 3, product)
        }else if(input[i] === "d"){
            let product = dividingFunction(input[i-1], input[i+1])
            input.splice(input[i], 3, product)
        }else{
            i++
        }
    };
    return input
}

function addingFunction(a, b){
    return a+b
}

function subtractingFunction(a, b){
    return a-b
}

function multiplyingFunction(a, b){
    return a*b
}

function dividingFunction(a, b){
    return a/b
}

module.exports = { parseInput, evaluateInput }