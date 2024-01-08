// Given an integer array nums, handle multiple queries of the following type:

// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

//Solution: Create a class called nums array and add a method that sums the values between two indices. Loop through the array from the left to the right inclusive and sum the total. Return the sum.

class NumArray {
  constructor(nums) {
    this.nums = nums;
  }
}

NumArray.prototype.sumRange = function (left, right) {
  let total = 0;

  for (let i = left; i <= right; i++) {
    total += this.nums[i];
  }

  return total;
};

//BigO Time Complexity: O(n) -> one for loop
//BigO Space Complexity: O(1) -> storing the values in variables