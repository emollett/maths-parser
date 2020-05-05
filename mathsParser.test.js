const { parseInput, evaluateInput, evaluateBrackets, evaluateArithmetic } = require('./mathsParser');

const input1 = "3a2c4"
const input2 = "32a2d2"
const input3 = "500a10b66c32"
const input4 = "3ae4c66fb32"
const input5 = "3c4d2aee2a4c41fc4f"

test("string is broken in the right places", () => {
  parsedInput = parseInput(input5)
  expect(parsedInput.length).toBe(17);
});

test("unsupported inputs return a message", () => {
  parsedInput = parseInput("a3a2c4")
  expect(parsedInput[0]).toBe("The string needs to start with a number or opening bracket");

  parsedInput = parseInput("3a2c4a")
  expect(parsedInput[0]).toBe("The string needs to end with a number or closing bracket");

  parsedInput = parseInput("3a2j4")
  expect(parsedInput[0]).toBe("You have included unsupported operators");

  parsedInput = parseInput("3A2C4")
  expect(parsedInput[0]).toBe("Please use lower case characters");
});

test("all operators are evaluated, left to right", () => {
  //all operators
  evaluatedInput = evaluateArithmetic(parseInput("2a4b2c3d4"))
  expect(evaluatedInput[0]).toBe(3)

  //precedence is left to right
  evaluatedInput = evaluateArithmetic(parseInput("32d2a2"))
  expect(evaluatedInput[0]).toBe(18)
});

test("brackets are identified and evaluated", () => {
  //single set of brackets
  evaluatedBrackets = evaluateBrackets(parseInput(input4))
  expect(evaluatedBrackets.length).toBe(5)

  //nested brackets
  evaluatedBrackets = evaluateBrackets(parseInput(input5))
  expect(evaluatedBrackets.length).toBe(7)

  //serial brackets
  evaluatedBrackets = evaluateBrackets(parseInput("3c4d2aee2a4c41fc4fce2a2f"))
  expect(evaluatedBrackets.length).toBe(9)

  //unmatched opening bracket
  evaluatedBrackets = evaluateBrackets(parseInput("3c4d2aee2a4c41fc4ce2a2f"))
  expect(evaluatedBrackets[0]).toBe("Input has an unmatched opening bracket")

  //unmatched closing bracket
  evaluatedBrackets = evaluateBrackets(parseInput("3c4d2ae2a4c41fc4fce2a2f"))
  expect(evaluatedBrackets[0]).toBe("Input has an unmatched closing bracket")
});

test("input string is parsed and evaluated in the correct order", () => {
  evaluatedInput = evaluateInput(input1)
  expect(evaluatedInput[0]).toBe(20)

  evaluatedInput = evaluateInput(input2)
  expect(evaluatedInput[0]).toBe(17)

  evaluatedInput = evaluateInput(input3)
  expect(evaluatedInput[0]).toBe(14208)

  evaluatedInput = evaluateInput(input4)
  expect(evaluatedInput[0]).toBe(235)

  evaluatedInput = evaluateInput(input5)
  expect(evaluatedInput[0]).toBe(990)
})




