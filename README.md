# maths-parser
Solution for developer interview using Node.js v10.15.0

Run app with ```yarn start```

Run tests with ```yarn test```

## The test

Implement a custom maths parser to take a string expression and compute its numerical value.

Operators should be applied in order of precedence from left to right. An exception to this is brackets which are used to explicitly denote precedence by grouping parts of an expression that should be evaluated first.

### Rules

a = '+', b = '-', c = '*', d = '/', e = '(', f = ')'

### Acceptance criteria

```
Input: "3a2c4"
Result: 20

Input: "32a2d2"
Result: 17

Input: "500a10b66c32"
Result: 14208

Input: "3ae4c66fb32"
Result: 235

Input: "3c4d2aee2a4c41fc4f"
Result: 990

```
