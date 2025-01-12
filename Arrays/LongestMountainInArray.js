// You may recall that an array arr is a mountain array if and only if:  arr.length >= 3
// There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that: arr[0] < arr[1] < ... < arr[i - 1] < arr[i] and  arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given an integer array arr, return the length of the longest subarray, which is a mountain. Return 0 if there is no mountain subarray.

// Approach: Iterate through the array, remember that a mountain must have a minimum length of 3. As you iterate, check for a peak - peak condition is arr[i-1] < arr[i] > arr[i+1]. Once a peak is found see how far left and right you can move and continue with those conditions. Track the length of mountains and update the maxPeak length.

const longestMountain = (arr) => {
  let maxLength = 0;
  let i = 1; // Start at 1 to avoid out-of-bounds issues

  while (i < arr.length - 1) {
    // Check if arr[i] is a peak
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      let left = i - 1;
      let right = i + 1;

      // Expand leftwards to find the start of the increasing part
      while (left > 0 && arr[left] > arr[left - 1]) {
        left--;
      }

      // Expand rightwards to find the end of the decreasing part
      while (right < arr.length - 1 && arr[right] > arr[right + 1]) {
        right++;
      }

      // Calculate the length of the mountain
      let currentLength = right - left + 1;

      // Update maxLength if current mountain is longer
      maxLength = Math.max(maxLength, currentLength);

      // Move i to the end of the current mountain to skip unnecessary checks
      i = right;
    } else {
      i++;
    }
  }

  return maxLength;
};

// BigO
// Time Complexity: O(n) -  Each element is processed once during the traversal (i) and at most once during expansions.
// Space Complexity: O(1) - Because we only use variables.
