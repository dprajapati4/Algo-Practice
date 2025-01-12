// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Approach: Create an object that has keys from 0 to N of nums and then loop through the array and compare it to the object. If the key does not exist in the object than push it to the result array.
const findDisappearedNumbersObj = (nums) => {
  const obj = {};
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = nums[i];
  }

  for (let i = 0; i < nums.length; i++)
    if (i + 1 !== obj[i + 1]) res.push(i + 1);

  return res;
};

// You can also use a Set it has similar time and space complexity.
const findDisappearedNumbersSet = (nums) => {
  const set = new Set(nums);
  const ans = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      ans.push(i);
    }
  }

  return ans;
};

// BigO Time Complexity: O(n)
// BigO Space Complexity: O(n)

// Space saving approach: Leverage the fact that the nums in the array are going to only be from 1 - n, where n is the length of the nums array. We can use this fact to negate visited values as a way to mark them as seen. This way, duplicates will attempt to negate the same value and will not be able to. In the end, values whose indexes were not found in nums are positive and we can push them into the answers array.

const findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1; // Get the index of the value we will negate
    if (nums[index] > 0) {
      nums[index] = -nums[index]; // Mark as visited by negating
    }
  }

  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      ans.push(i + 1); // If a value is positive it was not visited, we can use the index to
    }
  }

  return ans;
};

// BigO Time Complexity: O(n) Two loops of O(n) -> O(n) + O(n) = O(2n) = O(n)
// BigO Space Complexity: O(1) since we manipulate the array in space.
