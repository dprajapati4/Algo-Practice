// Write a function that takes a non-empty array sorted in ascending order and returns an array of the same length that has the squares of the array values also in ascending order

// Solution 1: Brute Force
// Approach: Iterate through the array and store the squared value and then sort the array.

function sortedSquaredArray(array) {
  const sortedA = new Array(array.length).fill(0);

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    sortedA[i] = value * value;
  }

  sortedA.sort((a, b) => a - b);

  return sortedA;
}

// BigO
// Time Complexity: O(nlog(n)) The .sort() function takes nlog(n) time, as the most time consuming part of the function it gives the entire function a time complexity of nlog(n) time.
//Space Complexity: O(N) We create a new array length of N, so the extra data structure we create gives us a space complexity of O(N).

// Solution 2

// Approach: The idea is that since this array is sorted in a non-decreasing order, the highest values when squared will be at the ends of the array. So use two pointers to track the first and last element, create a new array and another pointer to track the index at which we are inserting the new squared value. Essentially we are populating the array from the end to the beginning, the largest to the smallest value.

const sortedSquares = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let resIndexPosition = nums.length - 1;
  const result = [];

  while (left <= right) {
    const leftEl = nums[left] * nums[left];
    const rightEl = nums[right] * nums[right];
    if (leftEl > rightEl) {
      result[resIndexPosition] = leftEl;
      resIndexPosition -= 1;
      left += 1;
    } else {
      result[resIndexPosition] = rightEl;
      resIndexPosition -= 1;
      right -= 1;
    }
  }

  return result;
};

// BigO
// Time Complexity: O(n) If n is the length of the array, the function loops through each item of the array only once.
// Space Complexity: O(n) We create a new array length of n.
