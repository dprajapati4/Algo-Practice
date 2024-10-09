// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record. You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.

// Approach: Use a stack and iterate over the operations. Can use a switch or reduce instead as long as it follows the same logic -> append/push when you have an integer or "+" or "D". If you have "C", pop off the last item. We are building the stack --> in the array. Then iterate over the stack to create get the total.

const calPoints = (operations) => {
  const stack = [];
  let total = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else if (operations[i] === "C") {
      stack.pop();
    } else if (operations[i] === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else {
      stack.push(parseInt(operations[i]));
    }
  }

  for (let i = 0; i < stack.length; i++) {
    total += stack[i];
  }
  return total;
};

// BigO
// Time Complexity: O(n) where n is equal to the length of the operations array.
// Space Complexity: O(n) since we create a new stack.
