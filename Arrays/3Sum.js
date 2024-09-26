// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Approach: Since the input is unsorted we can sort the nums list. A sorted list allows us to make informed decision on whether we need a larger or smaller number to reach the target of 0. So we use three pointers, left, right and left+1. We compute the total and compare to zero, if the total is negative we move the middle towards the right/more positive. We push into the ans array the an arr of three nums that add up to 0.

const threeSum = (nums) => {
  const sorted = nums.sort((a, b) => a - b); // Sort in ascending order
  const ans = [];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > 0) break; // No need to proceed if the current number is positive, unless there is a negative, positive + positives will never reach 0.
    if (i > 0 && sorted[i] === sorted[i - 1]) continue; // Skip duplicates

    let low = i + 1;
    let high = sorted.length - 1;

    while (low < high) {
      let total = sorted[i] + sorted[low] + sorted[high];
      if (total === 0) {
        ans.push([sorted[i], sorted[low], sorted[high]]);
        low++;
        high--;

        // Skip duplicates for low and high pointers
        while (low < high && sorted[low] === sorted[low - 1]) low++;
        while (low < high && sorted[high] === sorted[high + 1]) high--;
      } else if (total < 0) {
        low++;
      } else {
        high--;
      }
    }
  }

  return ans;
};

// BigO
// Time: O(n^2) we iterate through the array of nums, and for each num we iterate over the other nums.
// Space: O(n) we create a new array.
