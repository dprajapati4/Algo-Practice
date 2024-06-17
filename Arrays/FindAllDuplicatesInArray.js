// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// Approach: Uses the array like a linked list. This can be done since the elements of the array are only going to be between 1 - n. This means they are positive and each value is a a possible index of the array. So as we iterate over the array, we negate the value of the element at the indexth values, nums[index]. If the number is at that index is already negative, we know it has already been visited and thus is a duplicate and so we add it to the return array. For example [4,3,2,1,3], at index 1 and 5, we have 3. And 3-1 = 2, so at both points we will visit the same index. Which on the second visit we will see is already negative.

const findDuplicates = (nums) => {
  let results = [];

  for (let i = 0; i < nums.length; i++) {
    // store the index the element corresponds to
    let index = Math.abs(nums[i]) - 1;

    // check if the value of the element is negative it means we have encountered it before so add it to the results
    if (nums[index] < 0) {
      results.push(index + 1);
    }
    // if not negative, negate the value
    nums[index] = nums[index] * -1;
  }
  return results;
};

// BigO - Time and space efficient
// Time Complexity: O(n) -> We iterate over nums array only once.
// Space Complexity: O(n) -> We don't create any extra data structure only the returning array.

// Brute Force Approach: Use a nested for loop to see the the elements are the same if they are, push that element into the results array. Return the results array.

const findDuplicatesBF = (nums) => {
  let results = [];

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        results.push(nums[i]);
      }
    }
  }

  return results;
};

// BigO - Not the best time complexity. Works but there are more time and space efficient solutions.
// Time Complexity: O(n^2) -> Nested loop, for each item in the array we iterate over the rest of the loop
// Space Complexity: O(n) -> We create an new array to store the duplicates.

// Approach: Use a hashmap to store the elements as keys and how many times they appear as th value. Then loop over the object and push keys with values more than one into to results array. Return the results array.

const findDuplicatesHM = (nums) => {
  let obj = {};
  let results = [];

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] ? (obj[nums[i]] = obj[nums[i]] + 1) : (obj[nums[i]] = 1);
  }

  for (key in obj) {
    if (obj[key] > 1) {
      results.push(key);
    }
  }

  return results;
};

// BigO - Is more time efficient than other solutions but takes extra space and the question asks you to solve this problem in constant space. Works but there are more space efficient solutions.
// Time Complexity: O(n) -> We only use two loop.
// Space Complexity: O(n) -> We create a map to store the values of nums and a results array.

// Approach: Sort and check elements next to each other. Filer out duplicates from the results array using Set (but can also use a filter or reduce method)

const findDuplicatesSort = (nums) => {
  let results = [];

  nums.sort();

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      results.push(nums[i]);
    }
  }

  return [...new Set(results)];
};
