// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

//1. BF: Use a nested for loop time: O(n^2) space: O(1)
const singleNumberBF = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let isUnique = true;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[j] === nums[i]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) return nums[i];
  }
};
// BigO
// Time Complexity: O(n^2) -> We use a nested for loop
// Space Complexity: O(1) -> We don't create anything other than constant variables.

// 2. Object Approach: Make an object that stores the values of key as as the number and the value the number of times it appears in an array and then loop through the object and return the key that is equal to 1.
const singleNumberObj = (nums) => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
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

// BigO
// Time Complexity: O(n) -> two for loops but they are not nested. O(2n) -> O(n)
// Space Complexity: O(n) -> storing the values in an object

//3. Approach: Sort and iterate, compare pairs and move up pointers appropriately.
var singleNumberSort = function (nums) {
  if (nums.length === 1) return nums[0];

  const sorted = nums.sort((a, b) => a - b);
  let start = 0;
  let next = start + 1;

  while (next <= sorted.length) {
    if (sorted[start] !== sorted[next]) {
      return sorted[start];
    }
    start = next + 1;
    next = start + 1;
  }
};

// BigO
// Time Complexity:  O(n logn) -> Sorting takes at least O(n logn) time.
// Space Complexity: O(1) -> if sorted in place O(1) else O(n)

// 4.Optimal solution using bit manipulation time.  XOR returns 0 if both bits are the same and 1 if not
var singleNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
};

// BigO
// Time Complexity: O(n) -> iterate over the nums array once.
// Space Complexity: O(1) -> we only create new constant variables.
