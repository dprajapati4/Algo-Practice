// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Approach: This builds on contains duplicates, and uses a sliding window. We create a set and add the integers that are in the k range. If we encounter a duplicate, we return true. If we complete the range and no duplicates, we move the window over by 1 and delete the value stored in the Set for that index. If no duplicates are encountered we return false.

var containsNearbyDuplicate = function (nums, k) {
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    // Maintain a sliding window of size k
    if (i > k) {
      seen.delete(nums[i - k - 1]); // Remove the element that's now out of range
    }
    if (seen.has(nums[i])) {
      return true; // Duplicate found within the range
    }
    seen.add(nums[i]);
  }
  return false; // No duplicates found within the range
};

// BigO
// Time Complexity: O(n) -  Each element is added or removed from the Set at most once.
// Space Complexity: O(k) - The Set stores at most k elements.
