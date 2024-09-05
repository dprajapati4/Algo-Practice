// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Approach: Since sets only hold unique values you can use this to compare the the items in the rows, the columns and the 3x3 boxes. If a number has already been added to the set than we return false, meaning its a duplicate.

const isValidSudoku = (board) => {
  for (let i = 0; i < board.length; i++) {
    const rowSet = new Set(); // New set for each row
    const colSet = new Set(); // New set for each column
    const boxSet = new Set(); // New set for each 3x3 box (created based on row and column)

    for (let j = 0; j < board[0].length; j++) {
      // Check the row
      const rowCell = board[i][j];
      if (rowCell !== ".") {
        if (rowSet.has(rowCell)) return false;
        rowSet.add(rowCell);
      }

      // Check the column
      const colCell = board[j][i];
      if (colCell !== ".") {
        if (colSet.has(colCell)) return false;
        colSet.add(colCell);
      }

      // Check the 3x3 sub-box
      const rowIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const colIndex = (i % 3) * 3 + (j % 3);
      const boxCell = board[rowIndex][colIndex];
      if (boxCell !== ".") {
        if (boxSet.has(boxCell)) return false;
        boxSet.add(boxCell);
      }
    }
  }

  return true; // If no duplicates found, board is valid
};

// Big O
// Time Complexity - O(1)  We iterate over over a 9x9 board each time, meaning we iterate over 81 cells max. If the board size was not restricted, the time complexity would be O(n^2) for the nested loop.
// Space Complexity - O(1) While new sets are created it also will max store 81 values. If board size was not restricted than the space complexity would be O(n).
