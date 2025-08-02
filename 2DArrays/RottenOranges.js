// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1

// Approach: Use BSF to traverse in 4 directions from the rotten oranges/#2. Start by iterating over the matrix and adding all the 2's to the queue - add the row the col and a time value-start at 0, keep track of the fresh oranges/1's. Then start iterating over the queue and dequeue the first array. Update the minutes, its should be the max between the time and current minutes. Now check the 4 directions next to the dequeued value. If its a 1/fresh, rot it and update its value to 2/seen/rotten and decrement the number of fresh oranges, now also add this row/col/time+1 into the queue. At the end, if no fresh oranges remain, all have been rotted, return the minutes, else return -1, there are fresh oranges that could not be reached.

const orangesRotting = (grid) => {
  const matrix = grid.map((row) => [...row]);
  const queue = [];
  let fresh = 0;
  let minutes = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 2) {
        // row, col, and minutes/time/count
        queue.push([row, col, 0]);
      } else if (matrix[row][col] === 1) {
        fresh++;
      }
    }
  }

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const valid = (row, col) =>
    row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;

  while (queue.length > 0) {
    const [row, col, time] = queue.shift();
    minutes = Math.max(minutes, time);
    for (const [dx, dy] of directions) {
      let nextRow = row + dx;
      let nextCol = col + dy;

      if (valid(nextRow, nextCol)) {
        if (matrix[nextRow][nextCol] === 1) {
          // rot the orange and decrement fresh
          matrix[nextRow][nextCol] = 2;
          fresh--;
          queue.push([nextRow, nextCol, time + 1]);
        }
      }
    }
  }

  return fresh === 0 ? minutes : -1;
};

// BigO
// Time: O(m * n) where m is the number of rows n is the number of columns in the matrix. The BFS never visits a node more than once since we mark seen ones with 2. First scan is O(m * n), and the BFS is also O(m * n).
// Space: O(m * n) where n is the size of the gird, the worst case is all cells are filled with rotten oranges, so our queue is filled to the max, m.
