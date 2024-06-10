// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Approach: We use two pointers, left and a right. If the left pointer is at a zero, we move the right pointer until the right pointer is at a nonzero number. We than swap and than move the left pointer forward and repeat the same with the right pointer.

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
// Time: O(n) we traverse through all of elements in the original array once.
// Space: O(1) we only use constants and are manipulating the array in place.
