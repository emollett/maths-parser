function evaluateInput(input) {
    parsedInput = parseInput(input);
    (parsedInput.includes("e") && (parsedInput = evaluateBrackets(parsedInput)))
    product = workLeftToRight(parsedInput)
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
    everythingInBracket = input.slice(input.indexOf("e")+1, input.lastIndexOf("f"));
    (everythingInBracket.includes("e") && (everythingInBracket = evaluateBrackets(everythingInBracket)))
    product = workLeftToRight(everythingInBracket)
    input.splice(input.indexOf("e"), (input.lastIndexOf("f")-input.indexOf("e")+1), product[0])
    return input
}

function workLeftToRight(input){
    i=0
    while(i<input.length){
        if(input[i] === "a"){
            let sum = addingFunction(input[i-1], input[i+1])
            input.splice(i-1, 3, sum)
        }else if(input[i] === "b"){
            let sum = subtractingFunction(input[i-1], input[i+1])
            input.splice(i-1, 3, sum)
        }else if(input[i] === "c"){
            let product = multiplyingFunction(input[i-1], input[i+1])
            input.splice(i-1, 3, product)
        }else if(input[i] === "d"){
            let product = dividingFunction(input[i-1], input[i+1])
            input.splice(i-1, 3, product)
        }else{
            i++
        }
    }
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