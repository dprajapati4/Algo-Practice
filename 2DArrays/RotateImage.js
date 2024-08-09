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

// Approach: 4 way swap. Use a temp variable to store the top left, then set the top left = bottom left, the bottom left = bottom right, then bottom right = top right and then top right = temp.
// The outer loop traverse the layers, the layers are usually equal to half the matrix, the inner loop iterates through the elements within that layer. This goes from the first element in the row to the element before the last, this is because the last element of the row is handled as the first element of the column.

var rotateSwap = function (matrix) {
  let matrixLength = matrix.length;

  // Traverse the matrix layer by layer
  for (let i = 0; i < Math.floor(matrixLength / 2); i++) {
    for (let j = i; j < matrixLength - 1 - i; j++) {
      // Save the top left element in a temporary variable
      let temp = matrix[i][j];

      // Move the bottom left element to the top left
      matrix[i][j] = matrix[matrixLength - 1 - j][i];

      // Move the bottom right element to the bottom left
      matrix[matrixLength - 1 - j][i] =
        matrix[matrixLength - 1 - i][matrixLength - 1 - j];

      // Move the top right element to the bottom right
      matrix[matrixLength - 1 - i][matrixLength - 1 - j] =
        matrix[j][matrixLength - 1 - i];

      // Now the top right element is set to the temp
      matrix[j][matrixLength - 1 - i] = temp;
    }
  }
};

// Big O
// Time Complexity: O(n^2) The outer loop runs (n + 1) / 2 times, and the inner loop runs n / 2 times. Since the matrix is of size n x n, the loops cover each element in the matrix once.
// Space Complexity: O(1) because we swap in place and create one temp variable.

// Approach: When you rotate the matrix 90 degrees and compare the rotated to the original array you see that you can create the rotated matrix by transposing and reversing.
// 1. transposing = switching the rows of the matrix with the columns. This can be achieved by switching [i,j] -> [j,i]. After transposing, the top-left to bottom-right diagonal - the main diagonal, remains the same, while other elements are swapped.

// [  [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9]  ]

// [  [1, 4, 7],
//    [2, 5, 8],
//    [3, 6, 9]  ]

// 2. reversing = do a horizontal reflection, or swap the values to the left and right of the middle of the matrix. This essentially means to reverse the order of the elements in the row.
// [  [1, 4, 7],
//    [2, 5, 8],
//    [3, 6, 9]  ]

// [  [7, 4, 1],
//    [8, 5, 2],
//    [9, 6, 3]  ]

var rotateTransposeAndReverse = function (matrix) {
  let n = matrix.length;

  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // Swap matrix[i][j] with matrix[j][i]
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};

// Big O
// Time Complexity: O(n^2) where n is the number or rows or columns, the transpose operation takes O(n^2) and reversing each row also takes O(n^2), so O(n^2) + O(n^2) = O(2n^2) = O(n^2)

// Space Complexity: O(1) because we swap in place and create a temp variable.
