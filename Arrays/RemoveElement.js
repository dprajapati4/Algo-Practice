// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Approach: You need to modify the array in place such we remove the values that are equal to val. To do this in-place we can swap the remove value with others and put them towards the end of the array. We can do this by continuously swapping indexes with non-target values and moving the removed items further towards the end of the array. The last index with switch with is also the number of items in the array that are not the target element.

var removeElement = function (nums, val) {
  let indexToSwapWith = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[indexToSwapWith] = nums[i];
      indexToSwapWith++;
    }
  }
  return indexToSwapWith;
};

// BigO
// Time: O(n ) we traverse through all of elements in nums array.
// Space: O(1) we are modifying nums in place.
