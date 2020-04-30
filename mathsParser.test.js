const { parseInput, evaluateInput } = require('./mathsParser');

const input1 = "3a2c4"
const input2 = "32a2d2"
const input3 = "500a10b66c32"
const input4 = "3ae4c66fb32"
const input5 = "3c4d2aee2a4c41fc4f"

test('string is broken in the right places', () => {
  parsedInput = parseInput(input1)
  expect(parsedInput.length).toBe(5);

  parsedInput = parseInput(input2)
  expect(parsedInput.length).toBe(5);

  parsedInput = parseInput(input3)
  expect(parsedInput.length).toBe(7);

  parsedInput = parseInput(input4)
  expect(parsedInput.length).toBe(9);

  parsedInput = parseInput(input5)
  expect(parsedInput.length).toBe(17);
});

test('evaluate with correct precedence', () => {
  evaluatedInput = evaluateInput(input1)
  expect(evaluatedInput.length).toBe(1)
  expect(evaluatedInput[0]).toBe(20)

  evaluatedInput = evaluateInput(input2)
  expect(evaluatedInput.length).toBe(1)
  expect(evaluatedInput[0]).toBe(17)

  evaluatedInput = evaluateInput(input3)
  expect(evaluatedInput.length).toBe(1)
  expect(evaluatedInput[0]).toBe(14208)
})




