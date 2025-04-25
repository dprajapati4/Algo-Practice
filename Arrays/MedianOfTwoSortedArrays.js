// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Brute Force Approach: Use merge sort to create a combined array. Then find the midpoint, if the new combined array is odd, than return that midpoint, its the median. If the new array is even return the average of the two middle values.

const findMedianSortedArrays = (nums1, nums2) => {
  let i = 0,
    j = 0;
  const merged = [];

  // Merge the two arrays
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  // Append remaining elements
  if (i < nums1.length) merged.push(...nums1.slice(i));
  if (j < nums2.length) merged.push(...nums2.slice(j));

  // Find the median
  const len = merged.length;
  const mid = Math.floor(len / 2);
  // if combined arr is odd
  if (len % 2 !== 0) {
    return merged[mid];
  }
  // if combined arr is even
  return (merged[mid - 1] + merged[mid]) / 2;
};

// BigO
// Time: O(n + m) we traverse through all of elements backward in nums1, n, and nums2, m .
// Space: O(n + m ) because you create a merged array.
