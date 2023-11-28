//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicate(nums) {
  //create and obj and then loop through the arr. Create key if it does not exist in the obj if it does than return true, its a duplicate

  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
      return true;
    } else {
      obj[nums[i]] = 1;
    }
  }

  return false;
}
//BigO Time Complexity: O(n)
//BigO Space Complexity: O(n)

//Alternate solution is to use sets. Sets only store unique values so if the size of the set is not equal to the size of the array than there is a duplicate

function setSolution(nums) {
    let testSet = new Set(nums);
    return testSet.size !== nums.length;
  }

  //BigO Time Complexity: O(n)
//BigO Space Complexity: O(n)