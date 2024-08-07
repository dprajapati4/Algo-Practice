// You are given a sorted unique integer array nums. A range [a,b] is the set of all integers from a to b (inclusive). Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as: "a->b" if a != b , "a" if a == b

// Approach: Initate a results array and a start index of 0, than iterate over the nums array starting at the 1st index. If nums[i] does not equal the previous value in nums plus one, or if we have arrived at the end of the array, means we need to add a value to results. If the index we are at equals start, it means we have not traversed further from the start point, meaning we only add that single value to the results array as a string. If not we add the range from start, to the index -1 value as a string to the results array. Now we also set start to the last index we visited and continue the loop.

const summaryRanges = (nums) => {
  // EC: When nums is empty return an empty array.
  if (nums.length === 0) return [];

  const results = [];
  let start = 0;

  for (let i = 1; i <= nums.length; i++) {
    if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
      if (start === i - 1) {
        results.push(`${nums[start]}`);
      } else {
        results.push(`${nums[start]}->${nums[i - 1]}`);
      }
      start = i;
    }
  }

  return results;
};

// BigO
// Time Complexity: O(n) because we go through all the integers in the the nums array once.
// Space Complexity: O(n) because even create a new results array.
