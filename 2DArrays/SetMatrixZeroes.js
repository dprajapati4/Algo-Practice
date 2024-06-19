// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Approach: Instead a creating an copy of the matrix we can use the first row and first column to determine if the rest of the row and column needs to be zeroed. First, check if the first row and the first column need to be zeroed. Then use the first row and first column to mark the other rows and columns that need to be zeroed. Then zero out the marked rows and columns. Lastly, zero out the first row and first column if they need to be zeroed.

const setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  let firstRowZero = false;
  let firstColZero = false;

  // Check if the first row needs to be zeroed. If we encounter a 0, we don't need to continue checking since that row will have to be zeroed so we break

  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRowZero = true;
      break;
    }
  }

  // Check if the first column needs to be zeroed. Similarly here we break once we encounter a 0.

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  // Use the first row and column to mark zero rows and columns
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Zero out marked rows
  for (let i = 1; i < m; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  // Zero out marked columns
  for (let j = 1; j < n; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < m; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  // Zero out the first row if needed
  if (firstRowZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  // Zero out the first column if needed
  if (firstColZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};

// BigO
// Time: O(m * n) where m is the number of rows n is the number of columns in the matrix. Iterating through the first row and column take O(n) + O(m) time. The nested loop to find the 0s takes O(m * n) time and modifying the rows and columns with the first row and columns also takes O(m * n). Lastly checking the first row and column and changing to 0's takes O(n) + O(m).  So O(m * n) + O(m * n) + O(m * n) + O(n) + O(m) simplifies to O(m * n).
// Space: O(1) we are not creating any new data structure just using variables.

// Brute Force Approach: Create a copy of the matrix to keep track of the original positions. Then traverse the original matrix by each column per row, and when you come across 0, set the corresponding entire row and column to 0 in the copy matrix. Then traverse the entire matrix again and copy the modified values from the copy to the original matrix.

const setZeroesBF = (matrix) => {
  // number of rows
  const m = matrix.length;
  // number of columns
  const n = matrix[0].length;

  // creates a copy of the matrix
  const copy = matrix.map((row) => row.slice());

  // Find all the positions of 0s in the original matrix
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        // Set the entire row to 0 in the copy
        for (let k = 0; k < n; k++) {
          copy[i][k] = 0;
        }
        // Set the entire column to 0 in the copy
        for (let k = 0; k < m; k++) {
          copy[k][j] = 0;
        }
      }
    }
  }
  // Copy the modified values back to the original matrix

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = copy[i][j];
    }
  }
};

// BigO
// Time: O(m * n) where m is the number of rows n is the number of columns in the matrix. Creating the shallow copy take O(m * n), the nested loop to find the 0s takes O(m * n) time and modifying the matrix with the copy also takes O(m * n). So O(m * n) + O(m * n) + O(m * n) simplifies to O(m * n).
// Space: O(m * n) where m is the number of rows n is the number of columns in the matrix. The copy we create takes O(m * n) space.
