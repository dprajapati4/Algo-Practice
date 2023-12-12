// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

//Approach: Dynamic Programming
//When you manually go through the steps you can see that the number of ways to get to the next step is the sum of the number of ways to get to the previous two steps.
// for n = 2 there are 2 ways →1+1
// for n = 3 there are 3 ways → 2+1
// for n = 4 there are 5 ways → 3+2
// for n = 5 there are 8 ways → 5+3
// for n = 6 there are 13 ways → 8+5
//This is the fibonacci sequence(the sum of the previous two numbers is the next number).

//Solution:
// The first two numbers in the sequence are initialized as 1 and the third number is initialized as 0. Using a loop we store the sum of the first and second number in the third number and then we store the second number in the first number and the third number in the second number.
// The nth numbed is returned as the answer to the number of ways to climb stairs.
const climbStairs = (n) => {
  if (n < 2) {
    return 1;
  }

  let firstStep = 1;
  let secondStep = 1;
  let thirdStep = 0;

  for (let i = 2; i <= n; i++) {
    thirdStep = firstStep + secondStep;
    firstStep = secondStep;
    secondStep = thirdStep;
  }

  return thirdStep;
};

//BigO Time Complexity: O(n) -> one for loop
//BigO Space Complexity: O(1) -> storing the values in variables
