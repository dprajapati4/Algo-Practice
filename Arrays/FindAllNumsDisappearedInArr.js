//Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

//Approach: Create an object that has keys from 0 to N of nums and then loop through the array and compare it to the object. If the key does not exist in the object than push it to the result array.
const findDisappearedNumbers = (nums) => {
  const obj = {};
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = nums[i];
  }

  for (let i = 0; i < nums.length; i++)
    if (i + 1 !== obj[i + 1]) res.push(i + 1);

  return res;
};

//BigO Time Complexity: O(n)
//BigO Space Complexity: O(n)
