// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

//  Brute force approach: Uses a nested for loop to compare each item in array to the other and adds that total to the answer array.
const smallerNumbersThanCurrentBF = (nums) => {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    let total = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      } else {
        if (nums[j] < nums[i]) {
          total++;
        }
      }
    }
    ans.push(total);
  }
  return ans;
};

//BigO Time Complexity: O(n^2) because we iterate over each item in nums array n times each.
//BigO Space Complexity: O(1) We don't create any new ds except the answer. If you count it, its O(n), where n is the length of nums array.

// Sorted Approach: Trade off space for faster time complexity. We sort the array and use the index as a way of figuring out how many smaller numbers exist and store that in an object. We then use the object compared to the original array to get the results in the correct order.
// ** Remember to sort a copy of the array so we have the original to compare to.

const smallerNumbersThanCurrent = (nums) => {
  // Make a copy of nums and sort it
  const sorted = [...nums].sort((a, b) => a - b);
  const dic = {};
  const ans = [];

  // Build the dic object using the sorted list. Since the list is sorted in ascending order the index tells us how many values are in front of the current aka how many are smaller. We don't store repeats which helps keep the list correct.
  for (let i = 0; i < sorted.length; i++) {
    if (!(sorted[i] in dic)) {
      dic[sorted[i]] = i;
    }
  }

  // Build the result based on the original array and push the value from the dic object
  for (let i = 0; i < nums.length; i++) {
    ans.push(dic[nums[i]]);
  }

  return ans;
};

//BigO Time Complexity: O(n log n) because we iterate over each item in nums array n times each and sorting takes logn time.
//BigO Space Complexity: O(n) The dictionary and the sorted copy of the array both take
