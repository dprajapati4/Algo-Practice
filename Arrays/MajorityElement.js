// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Approach: Create an object that stores the element of the array as the key and the number of times it appears in the array as the value. Then iterate over the object and return the key that has the greatest value.

const majorityElement = (nums) => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];

    obj[el] ? (obj[el] = obj[el] + 1) : (obj[el] = 1);
  }

  let maxValue = 0;
  let index;

  for (key in obj) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      index = key;
    }
  }

  return index;
};

// BigO
// Time: O(n) We iterate over all the items in n, and than also iterate over all the items in the object, which in the worst case creates an object with each element as its own key. So O(n) + O(n), which is than reduced to O(n)
// Space: O(n) This is because we create a new object that in the worst case has all elements from nums as a key.

// Approach: We sort the array and than uses a counter to keep track of the majority value. The idea is that if an element is a majority, it will appear in the array num/2 or greater number of times. Once we sort we can count how many of each value of element there is. If the count is not equal to the nums/2 or greater , it means its not the majority and we can move on to the next value to track.

const majorityElementFaster = (nums) => {
  if (nums.length === 1) return nums[0];

  nums.sort();

  let count = 1;
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === current) {
      count++;

      if (count > nums.length / 2) return current;
    } else {
      current = nums[i];
      count = 1;
    }
  }
};

// BigO
// Time: O(n log n) The sort function has a time complexity of O(n log n) where n is the length of nums. We also iterate over the nums array once. So O(n log n) + O(n) reduces to O(n log n).
// Space: O(1) This is because we only create new constants and manipulate the existing array.
