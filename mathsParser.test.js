const { parseInput } = require('./mathsParser');

test('string is broken in the right places', () => {
    let input = "3a2c4"
    parsedInput = parseInput(input)
    expect(parsedInput.length).toBe(5);
  });

//test that you can add two numbers

//test the whole thing


