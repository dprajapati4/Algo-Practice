// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

// Approach: Use a variable to store the closest num to zero and update it as you iterate over the nums array and return that value.

const findClosestNumber = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }

  let closestNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 0) {
      return nums[i];
    }

    if (Math.abs(nums[i]) < Math.abs(closestNum)) {
      closestNum = nums[i];
    } else if (Math.abs(nums[i]) === Math.abs(closestNum)) {
      closestNum = Math.max(closestNum, nums[i]);
    }
  }

  return closestNum;
};

// BigO
// Time: O(n) we iterate through the array of length n, only one time.
// Space: O(1) we don't create any new ds just use a variable. 
