// You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
// Return true if the Sudoku board is valid, otherwise return false

// Note: A board does not need to be full or be solvable to be valid.

// Brute Force Approach: Iterate over the row and check if an element is seen already. If it is than return false. Iterate over the columns and check if an element was seen already. If so return false. Last, check 3 x 3 squares to see if an element is repeated. To create the 3 x 3 square, you can divide the index of the row and the column by 3 and round up to see which square in the 9 x 9 sudoku board the element belongs to.

const isValidSudoku = (board) => {
  for (let row = 0; row < 9; row++) {
    let seen = new Set();
    // go thru each row
    for (let col = 0; col < 9; col++) {
      // if element is a "." empty continue
      if (board[row][col] === ".") continue;
      // if element is in seen set than its not a valid row
      if (seen.has(board[row][col])) return false;
      // add unseen element to the seen set
      seen.add(board[row][col]);
    }
  }
  // go thru each column
  for (let col = 0; col < 9; col++) {
    let seen = new Set();
    for (let row = 0; row < 9; row++) {
      if (board[row][col] === ".") continue;
      if (seen.has(board[row][col])) return false;

      seen.add(board[row][col]);
    }
  }

  // go thru each 3 x 3 square

  for (let square = 0; square < 3; square++) {
    let seen = new Set();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let row = Math.floor(square / 3) * 3 + i;
        let col = (square % 3) * 3 + j;

        if (board[row][col] === ".") continue;
        if (seen.has(board[row][col])) return false;
        seen.add(board[row][col]);
      }
    }
  }

  return true;
};

// Big O
// Time Complexity: O(n^2) because we are iterating over a 2D array, so for each n we iterate over n times.
// Space Complexity: O(n^2) because we are creating set of n length and in the worst-case scenario, if the board is full, we need a set each with size N to store all seen numbers for each of the N rows, N columns, and N boxes, respectively.

// Approach: One pass using hashmaps. Instead of iterating over the rows and then the columns and than the squares separately, we can do it in one pass.

const isValidSudokuOnePass = (board) => {
  const cols = new Map();
  const rows = new Map();
  const squares = new Map();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") continue;

      const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

      if (
        (rows.get(r) && rows.get(r).has(board[r][c])) ||
        (cols.get(c) && cols.get(c).has(board[r][c])) ||
        (squares.get(squareKey) && squares.get(squareKey).has(board[r][c]))
      ) {
        return false;
      }

      if (!rows.has(r)) rows.set(r, new Set());
      if (!cols.has(c)) cols.set(c, new Set());
      if (!squares.has(squareKey)) squares.set(squareKey, new Set());

      rows.get(r).add(board[r][c]);
      cols.get(c).add(board[r][c]);
      squares.get(squareKey).add(board[r][c]);
    }
  }
  return true;
};

// Big O
// Time Complexity: O(n^2) because we are iterating over a 2D array, so for each n we iterate over n times.
// Space Complexity: O(n^2) because we are creating set of n length and in the worst-case scenario, if the board is full, we need a set each with size N to store all seen numbers for each of the N rows, N columns, and N boxes, respectively.
