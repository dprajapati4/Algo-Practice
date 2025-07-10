// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Approach: Keep track of a count - the current num of consecutive 1s, and a max - the max consecutive nums, if the current value is 1 than update count and the max, if the current value is 0 it means we are at the end of a group of consecutive 1s or just at a 0, so we reset the count to 0 and start counting the next group.

const findMaxConsecutiveOnes = (nums) => {
  let count = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 0;
    }
  }

  return max;
};

// BigO
// Time Complexity: O(n) because we iterate over nums once.
// Space Complexity: O(1) because we are not creating any new data structure.
