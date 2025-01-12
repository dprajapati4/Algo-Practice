// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows  a, b are from arr and  a < b and  b - a equals to the minimum absolute difference of any two elements in arr

// Approach: Sort the array, this organizes the array in ascending order and then we can iterate over the sorted array to find the min diff, because the min diff will be found from two consecutive or adjacent integers.

const minimumAbsDifference = (arr) => {
  // Sort the array
  const sorted = arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  const ans = [];

  // Find the minimum absolute difference
  for (let i = 0; i < sorted.length - 1; i++) {
    minDiff = Math.min(minDiff, sorted[i + 1] - sorted[i]);
  }

  // Find all pairs with the minimum absolute difference
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i + 1] - sorted[i] === minDiff) {
      ans.push([sorted[i], sorted[i + 1]]);
    }
  }

  return ans;
};

// BigO
// Time Complexity: O(n logn) -  Sorting the array takes n logn time and then we have two sequential loops, both O(n) time  to O(n log) + O(n) + O(n) = O(n logn + 2n) = O(n logn )
// Space Complexity: O(n) -  Because we create a new sorted array, if sorted in place than O(1).
