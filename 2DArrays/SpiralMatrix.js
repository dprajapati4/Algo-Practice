// Given an m x n matrix, return all elements of the matrix in spiral order.

// Approach: Think how you would solve this manually. To create a spiral you go left, than down, than right and than up and repeat. You simulate that process in the code using the rows and columns start and end points. You update each endpoint with each iteration moving them inward.

const spiralOrder = (matrix) => {
  if (matrix.length === 0) return [];

  // define row and column start and end points

  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  let results = [];

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // Traverse to the right --->
    for (let j = colBegin; j <= colEnd; j++) {
      results.push(matrix[rowBegin][j]);
    }
    rowBegin++;

    // Traverse down ↓
    for (let i = rowBegin; i <= rowEnd; i++) {
      results.push(matrix[i][colEnd]);
    }
    colEnd--;

    if (rowBegin <= rowEnd) {
      // Traverse to the left <--
      for (let j = colEnd; j >= colBegin; j--) {
        results.push(matrix[rowEnd][j]);
      }
      rowEnd--;
    }

    if (colBegin <= colEnd) {
      // Traverse up ↑
      for (let i = rowEnd; i >= rowBegin; i--) {
        results.push(matrix[i][colBegin]);
      }
      colBegin++;
    }
  }

  return results;
};

// BigO
// Time: O(m * n) where m is the number of rows n is the number of columns in the matrix and we iterate over the entire matrix.
// Space: O(1) because we do this in constant space and only create new constant variables.
