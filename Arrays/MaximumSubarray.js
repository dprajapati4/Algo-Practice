// Given an integer array nums, find the  subarray with the largest sum, and return its sum.

// Approach: Uses the basic idea of a sliding window. Have a max sum and a running sum. We know that the numbers in nums can be positive or negative. The negative numbers will not help increase our sum. So we can at each iteration check if adding nums[i], is helpful or if the nums[i] is a greater value( if so than we abandon the first part of the string and now have a new substring that starts with nums[i]). Finally compare the running sum with the max sum and update as appropriate.

const maxSubArray = (nums) => {
  let maxSum = nums[0];
  let runningSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const sum = runningSum + nums[i];

    runningSum = Math.max(sum, nums[i]);
    maxSum = Math.max(runningSum, maxSum);
  }

  return maxSum;
};

// BigO
// Time: O(n) we traverse through all of elements in the original array once.
// Space: O(1) we are just using constant.
