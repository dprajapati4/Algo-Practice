// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.






// Brute Force Approach: When we rotate the matrix by 90 degrees the matrix changes so that the first row becomes the first column. So we can create a new empty matrix and fill it from last column towards the first column.

// [  [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9]  ]

// [  [7, 4, 1],
//    [8, 5, 2],
//    [9, 6, 3]  ]

const rotate = (matrix) => {
  let n = matrix.length;

  let rotated = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));

  // The row and column size are the same since this is a n x n matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }
  // Copy the rotated matrix back to the original matrix
  for (let i = 0; i < n; i++) {
    matrix[i] = rotated[i].slice();
  }
};

// Big O
// Time Complexity: O(n^2) where n is the length of the rows and the columns. We iterate over the entire matrix that takes O(n^2) and O(n) to copy the array. So O(n^2) + O(n) = O(n^2)
// Space Complexity: O(n^2) because we create a new matrix of n * n. 