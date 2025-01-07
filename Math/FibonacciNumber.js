// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

const fib = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
};

// Big O
// Time Complexity: O(2^n) exponential time complexity because we are making repeated calculations
// Space: O(n) because each recursive call adds a new stack frame to memory until the base case is reached. The recursion depth is proportional to n, since each call decreases n by 1.

// Approach: Start with prev1 = 1 and prev2 = 0 (Fibonacci base cases). Loop from 2 to n to build Fibonacci numbers step-by-step Update previous values to move forward

const fibIterative = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev1 = 1,
    prev2 = 0; // Start with base cases
  for (let i = 2; i <= n; i++) {
    // Loop from 2 to n
    let curr = prev1 + prev2; // Calculate current Fibonacci number
    prev2 = prev1; // Update prev2
    prev1 = curr; // Update prev1
  }
  return prev1;
};

// Big O
// Time Complexity: O(n) because the loop runs from 2 to n
// Space: O(1) because it uses only constant space for prev1, prev2, and curr.
