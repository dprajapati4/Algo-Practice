// Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Approach: Use an object to store the number as a key and value as the number of times it appears in the nums array. They iterate over the object to find the key with the max value.

const majorityElement = (nums) => {
  const counter = {};
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (counter[nums[i]]) {
      counter[nums[i]] = counter[nums[i]] + 1;
    } else {
      counter[nums[i]] = 1;
    }
  }

  for (let key in counter) {
    if (counter[key] > counter[max]) {
      max = key;
    }
  }
  return max;
};

// Big O
// Time Complexity - O(n)  We iterate over each item in nums array and then over each item in the counter object.
// Space Complexity - O(n) Because we create a new object counter to store the nums.

// Approach: Use the Boyer-Moore Voting Algorithm. The idea is that we test each num as a candidate to be the majority element. Since the majority element appears more than half number of times this method works to cancel out the non-majority numbers. When the majority element is present, it will "win" against all other elements in the array because its occurrences outweigh the occurrences of any other elements. As the count decreases for non-majority elements, it eventually reaches zero, allowing the majority element to set itself as the candidate.

const majorityElementBM = (nums) => {
  let ans = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      ans = num;
    }
    if (ans === num) {
      count += 1;
    } else {
      count -= 1;
    }
  }

  return ans;
};

// Big O
// Time Complexity - O(n)  We iterate over each item in nums array and then over each item in the counter object.
// Space Complexity - O(1) Because we are only storing constants and not creating any new data structures.
