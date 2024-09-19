// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length. Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice. Your solution must use only constant extra space.

// Brute Force Approach: Use a nested for loop to add two numbers at a time to see if they add up to the target. If they do, push that index+1 into the ans array and break out of the loop.
const twoSumBF = (numbers, target) => {
  const ans = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        ans.push(i + 1, j + 1);
        break;
      }
    }
  }
  return ans;
};

/* BigO
Time Complexity: O(n^2) If n is the length of the array, the nested loop runs n times per item in the array so O(n*n) = O(n^2)
Space Complexity: O(1) The amount of space taken by the function remains constant as n grows.
*/

// Approach: Two Pointer + use advantage of the fact that the list is sorted. Since the list is sorted larger nums are on the right end and smaller are on the left end. So left pointer at the beginning and right at the end, add the numbers and compare the total to the target sum. If the total is bigger than the target, move the right pointer, if the sum is smaller than the target, move the left pointer. Continue until the total sum equals the target.

const twoSum = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const totalSum = numbers[left] + numbers[right];
    if (totalSum === target) {
      return [left + 1, right + 1];
    } else if (totalSum > target) {
      right--;
    } else {
      left++;
    }
  }
};

/* BigO
Time Complexity: O(n) If n is the length of the array, we iterate over n once.
Space Complexity: O(1) The amount of space taken by the function remains constant as n grows.
*/
