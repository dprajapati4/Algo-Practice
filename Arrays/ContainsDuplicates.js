// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// 1. Brute Force Approach: Use a nested loop to compare each value with the other values in the array. Return true, if a duplicate appears. Return false if we iterate over the entire array and found no duplicates.
const containsDuplicateBF = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
};

// BigO
// Time Complexity: O(n^2) - Each element is iterated over n times. The nested loop takes O(n^2).
// Space Complexity: O(1) - No new data structure is created.

// 2. Sorted Array: A level up from the brute force approach, if we sort the array, the duplicates will be adjacent to each other in the sorted array.

const containsDuplicateSorted = (nums) => {
  const sortedArr = nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

// BigO
// Time Complexity: O(n logn) - the js sort() take O(n logn) time and the for loop runs O(n-1) -> O(n)  times.
// Space Complexity: O(1) or O(n) - js sort(), sorts in place, but if Timsort is used can take O(n) space.

// 3. Use an obj: We can create that stores the value as a key, if the key already exists, it means the value is a duplicate.
function containsDuplicate(nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
      return true;
    } else {
      obj[nums[i]] = 1;
    }
  }

  return false;
}
// BigO
// Time Complexity: O(n)
// Space Complexity: O(n)

// 4. Sets: Sets only store unique values so if the size of the set is not equal to the size of the array than there is a duplicate

function containsDuplicateSet(nums) {
  let testSet = new Set(nums);
  return testSet.size !== nums.length;
}

// BigO Time Complexity: O(n)
// BigO Space Complexity: O(n)
