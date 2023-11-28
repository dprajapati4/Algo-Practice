//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// N is the largest number and can be found from the length of the array +1. The plus one accounts for the 0.
//Create an object that is 0 -> N keys and then loop through the entire arr updating the key values to 1 then and return the key that has 0.

function missingNumber(nums) {
  let obj = {};

  for (let i = 0; i < nums.length + 1; i++) {
    obj[i] = 0;
  }

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]]++;
  }

  return Object.keys(obj).find((key) => obj[key] === 0);
}

//BigO Time Complexity: O(n)
//BigO Space Complexity: O(n)

// Alternative solution takes advantage of the fact that the sum of the numbers from 0 to N is (N * (N + 1)) / 2. We can calculate the expected sum and then subtract the sum of the numbers in the array to find the missing number.

function missingNumberFaster(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  let currentSum = 0;
  for (const num of nums) {
    currentSum += num;
  }
  return expectedSum - currentSum;
}

//BigO Time Complexity: O(n)
//BigO Space Complexity: O(1)
