// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Approach: Use a sliding window. Sum the initial numbers in the windows range. Then iterate through the rest of the array, starting at k. For each iteration remove the first item in the window and add the current item into the window. If the current sum is greater than the max sum update the max sum. At the end divide by k to get the average and return that value.

const findMaxAverage = (nums, k) => {
  let maxSum = 0;
  let avg = 0;

  // Creates the initial window.
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  if (nums.length === k) {
    avg = maxSum / k;
    return avg.toFixed(5);
  }

  let currSum = maxSum;
  // Updates the window
  for (let i = k; i < nums.length; i++) {
    currSum = currSum - nums[i - k] + nums[i];
    maxSum = Math.max(currSum, maxSum);
  }

  avg = maxSum / k;
  return avg.toFixed(5);
};
