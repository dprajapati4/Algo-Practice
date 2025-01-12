// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Approach: Use a sliding window. Use a start and end pointer, track the minLength, and the current sum. Iterate over the array adding to a current sum. When the current sum is greater than or equal to the target number we start shrinking, move the start pointer closer to the end pointer/i pointer, update the minLength using the indices to calculate the length. When the currentSum is less than the target break out of the shrink step and continue expanding. Return minLength or 0 if not subarray is found.

var minSubArrayLen = function (target, nums) {
  let minLength = Infinity;
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < nums.length; end++) {
    currentSum += nums[end]; // Expand the window by adding nums[end]

    // Shrink the window while the current sum is greater than or equal to the target
    while (currentSum >= target) {
      minLength = Math.min(minLength, end - start + 1);
      currentSum -= nums[start]; // Shrink the window by removing nums[start]
      start++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

// BigO
// Time Complexity: O(n ) -  We iterate through the array once.
// Space Complexity: O(1) -  We only create constant variables.
