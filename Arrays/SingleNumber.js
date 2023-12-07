// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Approach: Make an object that stores the values of key as as the number and the value the number of times it appears in an array and then loop through the object and return the key that is equal to 1.
const singleNumber = (nums) => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }

  for (let findNum in obj) {
    if (obj[findNum] === 1) {
      return findNum;
    }
  }
};

//BigO Time Complexity: O(n) -> two for loops but they are not nested. O(2n) -> O(n)
//BigO Space Complexity: O(n) -> storing the values in an object
