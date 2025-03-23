// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Approach: Start with two consecutive pointers, when you approach a duplicate, one pointer forward until you encounter a unique number and swap with the number next to the other pointer and than increment it forward. Do this until the "fast"/ "checking ahead" pointer reaches the end. The number of unique elements is equal to the pointer lagging behind's length(since arrays are 0 indexed its curr + 1)

const removeDuplicates = (nums) => {
  if (nums.length <= 1) return nums.length;
  let curr = 0;
  let next = 1;

  while (next < nums.length) {
    if (nums[curr] === nums[next]) {
      next++;
    } else {
      nums[curr + 1] = nums[next];
      next++;
      curr++;
    }
  }

  return curr + 1;
};


// BigO
// Time: O(n) we traverse through all of elements in nums array once.
// Space: O(1) we are modifying nums in place.
