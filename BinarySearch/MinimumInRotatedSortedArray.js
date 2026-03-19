// You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

// [3,4,5,6,1,2] if it was rotated 4 times.
// [1,2,3,4,5,6] if it was rotated 6 times.
// Notice that rotating the array 4 times moves the last four elements of the array to the beginning. Rotating the array 6 times produces the original array.

// Assuming all elements in the rotated sorted array nums are unique, return the minimum element of this array.

// Binary Search: Since the array is sorted, rotated we know that when divided into two segments, one segment will be sorted and the other will contain the rotated part. The rotated part will have the minimum. So we can combine this idea with binary search. Track min result, if the left is than the right - this means the array is already sorted, and we can update the min by comparing it to the left value and break out of the while loop. If the array is not already sorted, we find the midpoint and check that the midpoint is not the min, and than do binary search. If the left segment is sorted, we shorted our search area to the right segment and if the right segment is sorted we shorted the sort area to the left. We update the min as appropriate as we search through the array and at the end return our min.

const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let res = nums[0];

  while (left <= right) {
    // if sorted than updated min
    if (nums[left] < nums[right]) {
      res = Math.min(res, nums[left]);
      break;
    }
    // compute mid and update min
    let mid = left + Math.floor((right - left) / 2);
    res = Math.min(res, nums[mid]);
    // if the left half is sorted than search the right half
    if (nums[mid] >= nums[left]) {
      left = mid + 1;
      // if the right half is sorted seach the left half
    } else {
      right = mid - 1;
    }
  }

  return res;
};

// BigO
// Time: O(log n) since we do binary search our search array is halved every iteration.
// Space: O(1) we are not creating any new data structure just using variables.

// Brute Force Approach: Use two pointers and a min value that you update as you iterate over the array.

const findMinBF = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let min = 2000;

  while (left <= right) {
    if (nums[left] < nums[right]) {
      min = Math.min(min, nums[left]);
    } else {
      min = Math.min(min, nums[right]);
    }
    left++;
    right--;
  }

  return min;
};

// BigO
// Time: O(n) since we iterate over the entire array once.
// Space: O(1) we are not creating any new data structure just using variables.
