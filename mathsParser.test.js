const { parseInput, evaluateInput } = require('./mathsParser');

const input1 = "3a2c4"
const input2 = "32a2d2"
//Extra test case added to check order of precedence
const inputE = "32d2a2"
const input3 = "500a10b66c32"
const input4 = "3ae4c66fb32"
const input5 = "3c4d2aee2a4c41fc4f"
//Extra test case added to check serial rather than nested brackets
const inputE2 = "3c4d2aee2a4c41fc4fce2a2f"

test("string is broken in the right places", () => {
  parsedInput = parseInput(input5)
  expect(parsedInput.length).toBe(17);
});

test("all operators are evaluated", () => {
  evaluatedInput = evaluateInput(input5)
  expect(evaluatedInput.length).toBe(1)
});

test("string is evaluated in the correct order", () => {
  evaluatedInput = evaluateInput(input1)
  expect(evaluatedInput[0]).toBe(20)

  evaluatedInput = evaluateInput(input2)
  expect(evaluatedInput[0]).toBe(17)

  evaluatedInput = evaluateInput(inputE)
  expect(evaluatedInput[0]).toBe(18)

  evaluatedInput = evaluateInput(input3)
  expect(evaluatedInput[0]).toBe(14208)

  evaluatedInput = evaluateInput(input4)
  expect(evaluatedInput[0]).toBe(235)

  evaluatedInput = evaluateInput(input5)
  expect(evaluatedInput[0]).toBe(990)

  evaluatedInput = evaluateInput(inputE2)
  expect(evaluatedInput[0]).toBe(3960)
})




