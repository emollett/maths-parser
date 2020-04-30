const { parseInput } = require('./mathsParser');

test('string is broken in the right places', () => {
    let input = "3a2c4"
    parsedInput = parseInput(input)
    expect(parsedInput.length).toBe(5);

    let secondInput = "32a2d2"
    parsedInput = parseInput(secondInput)
    expect(parsedInput.length).toBe(5);
  });

//test that you can add two numbers

//test the whole thing


