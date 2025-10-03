// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

// For example: 34+ means 3 + 4

// Approach: Use a stack and when there are numbers add them to a stack. When there is an operation, pop the last two items off the stack and evaluate the value with the operation and then push that value onto the stack. The only trickly operation is division, we are told no division by 0 will occur but we need to truncate the answer. Return the last item on the stack which should be the total evaluated answer.

const evalRPN = (tokens) => {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const operationStr = "+-*/";
    const token = tokens[i];

    if (operationStr.includes(token)) {
      const a = stack.pop();
      const b = stack.pop();

      if (token === "+") {
        stack.push(a + b);
      } else if (token === "-") {
        stack.push(b - a);
      } else if (token === "*") {
        stack.push(a * b);
      } else {
        stack.push(Math.trunc(b / a));
      }
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack.pop();
};

// BigO
// Time Complexity: O(n) where n is equal to the length of the tokens array.
// Space Complexity: O(n) since we create a new stack.

// Alternative using a map and the operations and a stack

const evalRPN2 = (tokens) => {
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (operators[tokens[i]]) {
      let b = Number(stack.pop()); // right
      let a = Number(stack.pop()); // left
      let result = operators[tokens[i]](a, b);
      stack.push(result);
    } else {
      stack.push(tokens[i]);
    }
  }

  return stack.pop();
};

// BigO
// Time Complexity: O(n) where n is equal to the length of the tokens array.
// Space Complexity: O(n) since we create a new stack and a object, but the object has a fixed length.
