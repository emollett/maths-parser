const { parseInput } = require('./mathsParser');

let input1 = "3a2c4"
let input2 = "32a2d2"
let input3 = "500a10b66c32"
let input4 = "3ae4c66fb32"
let input5= "3c4d2aee2a4c41fc4f"

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

//test that you can add two numbers

//test the whole thing


