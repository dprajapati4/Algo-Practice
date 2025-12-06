// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Approach: Prefill the answers array with as many 0s as the size of the temperatures array and create a stack. Use the stack to keep track of the indices of temperatures that need to find the next warmer day. For each temperature, pop indices from the stack if the current temperature is higher than the temperature at the index stored at the top of the stack. For each popped index, calculate the difference between the current index and the popped index and store it in the result array. Push the current index onto the stack .After the loop, indices left in the stack have no warmer days in the future, so their result stays 0.

const dailyTemperatures = (temperatures) => {
  const temps = temperatures;
  const n = temps.length;
  const answer = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < temps.length; i++) {
    // While stack is not empty and the current temperature is greater than the temperature at the index of the top of the stack
    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      const index = stack.pop();
      answer[index] = i - index;
    }
    stack.push(i);
  }

  return answer;
};

// BigO
// Time Complexity: O(n) where n is equal to the length of the temperatures array because each index is pushed and popped from the stack only once.
// Space Complexity: O(n) since we create a new stack.

// Brute Force Approach: Iterate over temperature and for each temp, keep track of how many values next you need to visit ahead so before you encounter a larger number.

const dailyTemperatureBFs = (temperatures) => {
  const res = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    let count = 1;
    let j = i + 1;
    while (j < temperatures.length) {
      if (temperatures[j] > temperatures[i]) {
        break;
      }
      j++;
      count++;
    }

    count = j === temperatures.length ? 0 : count;
    res[i] = count;
  }

  return res;
};

// BigO
// Time Complexity: O(n^2) where n is equal to the length of the temperatures array, since we use a nested loop.
// Space Complexity: O(n) since we create a new output array.
