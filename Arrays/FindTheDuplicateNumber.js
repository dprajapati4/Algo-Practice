// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Approach: Uses binary search and the Pigeonhole Principle. Binary search narrows the search range on each iteration. The Pigeonhole Principle: If more than midpoint numbers are <= midpoint, it means some of these numbers must repeat within this range because there are only midpoint distinct positions available but more numbers than positions.

const findDuplicate = (nums) => {
  let low = 1;
  let high = nums.length - 1; // n

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let count = 0;

    // Count how many numbers are less than or equal to mid
    for (let num of nums) {
      if (num <= mid) {
        count++;
      }
    }

    // Adjust search range based on the count
    if (count > mid) {
      high = mid; // The duplicate number is in the range [low, mid]
    } else {
      low = mid + 1; // The duplicate number is in the range [mid + 1, high]
    }
  }
  return low;
};

// BigO - Is a very time efficient solution and solves the problem in constant space as well.
// Time Complexity: O(n log n) -> We use while loops and binary search divides each iteration into 2.
// Space Complexity: O(1) -> We only use constants.

// Alternative Approaches

// Brute force approach: use a nested for loop to check each value against the other.

const findDuplicateBF = (nums) => {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] === nums[j]) {
        return nums[i];
      }
    }
  }
};

// BigO - Not the best time complexity. Works but there are more time efficient solutions.
// Time Complexity: O(n^2) -> Nested loop, for each item in the array we iterate over the rest of the loop
// Space Complexity: O(1) -> We only use constants.

// Sorting - its important to think about sorting when you are looking for something in an array. A sorted array makes it easier to find what you are looking for, because you know that the values to the left and right will either be less than or greater than the value you are looking for. So once you sort the array you can iterate over the array from the beginning and once you encounter something more than once, you can return the value, since there is only one duplicate in the array.

const findDuplicateSort = function (nums) {
  nums.sort();
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return nums[i];
    }
  }
};

// BigO - Also not the best time complexity. Works but there are more time efficient solutions.
// Time Complexity: O(n logn) -> We only use one loop but .sort() has a time complexity of O(n logn) so it still can take a long time.
// Space Complexity: O(1) -> We only use constants.

// Use a hashmap - iterate over the nums array and store the value of the element in nums as a key. If the key already exists in the map, return that value, because this means we encountered this value before, and so is the duplicate.

const findDuplicateMap = (nums) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) return nums[i];
    else {
      map[nums[i]] = 1;
    }
  }
};

// BigO - Is more time efficient than other solutions but takes extra space and the question asks you to solve this problem in constant space. Works but there are more space efficient solutions.
// Time Complexity: O(n) -> We only use one loop.
// Space Complexity: O(n) -> We create a map to store the values of nums.

// Link List Approach: Uses Floyd's Tortoise and Hare Algorithm which uses a fast and slow pointer to detect a cycle in linked list. The idea is that if there is a cycle the fast and slow pointer will meet at one point.
// 1. You convert the array to a linked list by using the value at each index as a pointer to the index of the next value you will visit.
// 2. If there is a duplicate, it will create a cycle and so there will be a point at which the two pointers intersect. The intersection point is not necessarily the duplicate. So we
// 3.  The entry point to the cycle is the duplicate. You find the entry point to this cycle by resetting one pointer to the start and moving both pointers one step at a time. The point where they meet is the duplicate number because there is only one entry point to the cycle.

const findDuplicateLL = (nums) => {
  // Initialize the tortoise and hare
  let slow = nums[0];
  let fast = nums[0];

  // First phase: Finding the intersection point in the cycle
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // Second phase: Finding the entrance to the cycle
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return fast;
};

// BigO - Is a very time efficient solution and solves the problem in constant space as well. But this approach is bit complicated and difficult to understand.
// Time Complexity: O(n) -> We use two while loops.
// Space Complexity: O(1) -> We only use constants.
