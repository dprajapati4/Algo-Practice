// You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using all the elements from original.

// The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.

// Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.

// Approach: If the length of the original arr is not equal to m*n, that means we cannot create a 2D array with those values, so we return an empty 2D array. To build the 2D array we create two arrays, the result array and a arrRow. The arrRow is what we will use to build each row. Iterate over the originals array, adding to the arrRow, once the arrRow is equal to n, we push arrRow into results and reset arrRow to equal [].

const construct2DArray = (original, m, n) => {
  // If the length of the original arr is not equal to m*n, that means we cannot create a 2D array with those values

  if (original.length !== m * n) return [];

  let result = [];
  let arrRow = [];

  for (let i = 0; i < original.length; i++) {
    arrRow.push(original[i]);
    if (arrRow.length === n) {
      result.push(arrRow);
      arrRow = [];
    }
  }

  return result;
};

// BigO
// Time: O(n) we traverse through all of elements in the original array once.
// Space: O(n) where n is the length of the original array. The result array is a 2D array with m rows and n columns, holding all the elements of original. The space required for result is proportional to the number of elements in original: O(m * n) = O(n).

// Brute force approach using nested for loops.

function convert1DArrayInto2DArray(original, m, n) {
  if (original.length !== m * n) {
    return [];
  }

  let result = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(original[i * n + j]);
    }
    result.push(row);
  }
  return result;
}

// BigO
// Time: O(n) where n is the length of the original array. This is not O(n^2) because the outer loop runs m times (for each row. The inner loop runs n times (for each column in a row). The total number of iterations in the nested loops is m * n, which is equal to the length of original.
// Space: O(n) where n is the length of the original array. The result array is a 2D array with m rows and n columns, holding all the elements of original. The space required for result is proportional to the number of elements in original: O(m * n) = O(n).
