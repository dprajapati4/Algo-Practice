// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// *** Remember for 2D arrays and matrix ***
//  rows = matrix.length
//  cols = matrix.[0].length // the length of the first inner arr

//  matrix[row][column]

// Brute Force Approach:

const searchMatrix = (matrix, target) => {
  if (matrix.length === 0) return false;

  for (let i = 0; i < matrix.length; i++) {
    // iterate over each row
    for (let j = 0; j < matrix[0].length; j++) {
      // and each col in that row
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};

// BigO
// Time: O(m * n) where m is the number of rows n is the number of columns in the matrix.
// Space: O(1) we are not creating any new data structure just using variables.

// Binary Search Approach: Since the inner arrays are sorted we can take advantage of that to conduct binary search. Binary search checks a number and in a sorted list can help us figure out if the target is more left/less than or more the right/greater than the value we are currently checking. This can reduce our search area by half each time.

// To convert a sorted 2D arr to a sorted 1D
// For any index in the flat array: where n is the num of columns
//      row = Math.floor(idx / n) → how many full rows fit before this element
//      col = idx % n → position within the current row

const searchMatrixBS = (matrix, target) => {
  if (matrix.length === 0) return false;

  const rows = matrix.length;
  const cols = matrix[0].length;
  const flattenedLen = rows * cols;

  let left = 0;
  let right = flattenedLen - 1;
  let midIdx, midIdxElem;
  while (left <= right) {
    // midpoint index
    midIdx = Math.floor((left + right) / 2);
    // element in matrix
    midIdxElem = matrix[Math.floor(midIdx / cols)][midIdx % cols];
    if (target === midIdxElem) {
      return true;
    } else {
      if (target < midIdxElem) {
        right = midIdx - 1;
      } else {
        left = midIdx + 1;
      }
    }
  }
  return false;
};

// BigO
// Time: O(log(m*n)) where m is the number of rows n is the number of columns in the matrix, and log since BS divides each iteration into 2.
// Space: O(1) we are not creating any new data structure just using variables.
