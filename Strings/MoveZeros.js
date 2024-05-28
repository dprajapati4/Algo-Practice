// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Approach: Use two pointers, one tracking the left position and another the point after the left. Iterate over the nums array, if the left pointer reaches a 0, increase left

const moveZeroes = (nums) => {
  let left = 0;
  let right = left + 1;

  while (right <= nums.length - 1) {
    if (nums[left] !== 0) {
      left++;
      right++;
    } else {
      if (nums[right] !== 0) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
      }
      right++;
    }
  }
  return nums;
};

// BigO
// Time Complexity: O(n) where n is equal to the length of t.
// Space Complexity: O(1) because we are only creating new constants.
