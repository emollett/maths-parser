function parseInput(input) {
    parsedInput = []
    while(input.length > 0){
        parsedInput.push((parseInt(input, 10) || input[0]))
        input = input.slice(parsedInput[parsedInput.length -1].toString().length)
    }
    return parsedInput
  }

function evaluateInput(input) {
    parsedInput = parseInput(input);
    let i=0;
    while(i<parsedInput.length){
        if(parsedInput[i] === "a"){
            let sum = addingFunction(parsedInput[i-1], parsedInput[i+1])
            parsedInput.splice(parsedInput[i], 3, sum)
            i++
        }else{
            i++
        }
    };

    let j = 0;
    while(j<parsedInput.length){
        if(parsedInput[j] === "c"){
            let product = multiplyingFunction(parsedInput[j-1], parsedInput[j+1])
            parsedInput.splice(parsedInput[j], 3, product)
            j++
        }else if(parsedInput[j] === "d"){
            let product = dividingFunction(parsedInput[j-1], parsedInput[j+1])
            parsedInput.splice(parsedInput[j], 3, product)
            j++
        }else{
            j++
        }
    };

    return parsedInput
}

function addingFunction(a, b){
    return a+b
}

function multiplyingFunction(a, b){
    return a*b
}

function dividingFunction(a, b){
    return a/b
}

module.exports = { parseInput, evaluateInput }