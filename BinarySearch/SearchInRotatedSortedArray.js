// You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

// [3,4,5,6,1,2] if it was rotated 4 times.
// [1,2,3,4,5,6] if it was rotated 6 times.
// Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.

// You may assume all elements in the sorted rotated array nums are unique,

// A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

// Binary Search - 2 Pass - In a rotated sorted array, we know that when divided in half, one half is sorted, and the other is unsorted, this is where the rotated part shifted. So we do binary search once to find the pivot, the smallest number in the array. Once we find this pivot, we do binary search with the pivot being the midpoint that creates two subarrays. This way we have two sorted arrays. Now we simply do binary search on the sorted arrays and return either the index of the target or -1.

const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  // find the pivot = lowest num
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  const pivot = left;
  // do binary search on the two sorted halves.
  const result = binarySearch(nums, target, 0, pivot - 1);
  if (result !== -1) {
    return result;
  }

  return binarySearch(nums, target, pivot, nums.length - 1);
};
const binarySearch = (nums, target, left, right) => {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

// Brute Force Approach: Iterate over the entire array and return index if target found, else return -1

const searchBF = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

// BigO
// Time: O(n) since we iterate over the entire array once.
// Space: O(1) we are not creating any new data structure just using variables.
