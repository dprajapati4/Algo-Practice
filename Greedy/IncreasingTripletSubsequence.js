// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Brute Force Approach: Use three nested for loops

const increasingTripletBF = (nums) => {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] < nums[j] && nums[j] < nums[k]) return true;
      }
    }
  }

  return false;
};

// BigO
// Time Complexity: O(n^3) meaning the runtime with increase to the cube of n as n grows. This is incredibly slow as the data size grows.
// Space Complexity: O(1) since we only use variables.

// Greedy Approach: You can return once you find a third smallest number. You find the first number, than a second smaller number greater than the first, and if you find a third number which is greater than the second, you have triplet and you can return that.

const increasingTripletGreedy = (nums) => {
  let first = Infinity;
  let second = Infinity;

  for (let num of nums) {
    // the way this runs, first keeps updating to be the smallest number, if a number is greater than it becomes the second and finally if it passes the first and second check it can be the third triplet and return true.
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }

  return false;
};

// BigO
// Time Complexity: O(n) we iterate over nums only once.
// Space Complexity: O(1) since we only use variables.
