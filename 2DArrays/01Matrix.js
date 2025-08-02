// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two cells sharing a common edge is 1.

// Approach: Use the idea of BFS, to search level by level(aka outward from a 0), with matrix traversal. Create a deep copy of the matrix, we will be mapping distance away from a 0 onto the copy. Create a Set to store seen positions. Initiate a queue for BFS. First step is to iterate over the matrix and push all position that are 0 into the queue - store [row, col, #]. Since these 0 positions have been visited, add them to the seen Set as well. After that we start BFS on all the 0's, by dequeuing them from our queue. For each 0, we check all our neighbors, up, down, right and left. We check if each neighbor is valid - its in bounds of the matrix and not seen yet. Then we update seen, and update the matrix, the neighbor = distance from the 0. Since the matrix only has 1's and 0, all 0's are queued and seen, so only 1's at this point are unseen. So even with the update, the copy of the matrix will look the same. So after we check a neighbor, we also add them to the queue. So at this point all positions that are 1 away from a 0 / next to a 0, are on the queue. This is the next level. Return the copy, as it has the distance to a 0 from each point now in the correct order.
// Original:   Output:
// [[0,0,0],   [[0,0,0],
//  [0,1,0],    [0,1,0],
//  [1,1,1]]    [1,2,1]]

// An ideal example
// [[1,1,1,1,1],   [[4,3,2,3,4],
//  [1,1,1,1,1],    [3,2,1,2,3],
//  [1,1,0,1 1],    [2,1,0,1,2],
//  [1,1,1,1,1],    [3,2,1,2,3],
//  [1,1,1,1,1]     [4,3,2,3,4]]

// Reminders:
// The number row in a matrix is the length of the 2D -> row = matrix.length
// The number of columns in a matrix is the length of the single row -> col = matrix[0].length
// To traverse to your neighbors in a matrix you add or minus 1 to the row or col.
// [0, 1] -> right
// [1, 0] -> down
// [0, -1] -> left
// [-1, 0] -> up

var updateMatrix = function (mat) {
  const matrix = mat.map((row) => [...row]);
  const seen = new Set();
  const queue = [];

  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      if (matrix[row][col] === 0) {
        queue.push([row, col, 0]);
        seen.add(`${row},${col}`);
      }
    }
  }

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // checks that the index of the row is between 0 - mat.length and col index is between 0 and mat[0].length
  const valid = (row, col) =>
    row >= 0 && row < mat.length && col >= 0 && col < mat[0].length;

  while (queue.length > 0) {
    // removes the first item off the queue
    const [row, col, steps] = queue.shift();

    // explore all directions from the dequeued item
    for (const [dx, dy] of directions) {
      const nextRow = row + dx;
      const nextCol = col + dy;

      const key = `${nextRow},${nextCol}`;
      // checks that the next row and col are valid/in bounds of the matrix and has not been visited/seen yet.
      if (valid(nextRow, nextCol) && !seen.has(key)) {
        seen.add(key);
        matrix[nextRow][nextCol] = steps + 1;
        queue.push([nextRow, nextCol, steps + 1]);
      }
    }
  }

  return matrix;
};

// BigO
// Time: O(m * n) where m is the number of rows n is the number of columns in the matrix. The BFS never visits a node more than once since we store visited nodes in seen set.
// Space: O(m * n) we use a set and a queue, that each take O(m * n) space. The matrix we copy also is O(m * n) space.
