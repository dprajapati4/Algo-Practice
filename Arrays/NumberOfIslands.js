// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Approach: The idea is that as we iterate over the "rows" and "columns" of the 2D array once we encounter a 1, we check in 4 directions - top, bottom, right and left - continuously util we reach water or 0. We to track visited cells, this keeps adjacent 1s counter together. We use a Set to track visited since Set's only store unique items. We can traverse these directions in either a BFS or a DFS fashion. Each time we find 1 and a traverse all directions to group the island together we increment an island count that is returned in the end.

// BFS Approach: We use a queue to track the level by level traversal

const numIslandsBFS = (grid) => {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();

  const bfs = (r, c) => {
    const queue = [];
    queue.push([r, c]);
    visited.add(`${r},${c}`); // Mark as visited using string representation

    while (queue.length > 0) {
      const [row, col] = queue.shift();

      // All 4 possible directions (down, up, right, left)
      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];

      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;

        // Check boundaries and if the cell is unvisited land, if it it add it to the queue to check next cells and add it to the visited set.
        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          grid[newRow][newCol] === "1" &&
          !visited.has(`${newRow},${newCol}`)
        ) {
          queue.push([newRow, newCol]);
          visited.add(`${newRow},${newCol}`);
        }
      }
    }
  };

  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // If it's land and not visited
      if (grid[i][j] === "1" && !visited.has(`${i},${j}`)) {
        bfs(i, j); // Start BFS to mark the entire island
        count++; // Increment the island count
      }
    }
  }

  return count;
};

// BigO
// Time Complexity: O(m * n) - because every cell is visited at most once.
// Space Complexity: O(n) - O(min(m,n)) -> O(n) for the queue, since the queue stores at most one layer of the grid (in the worst case)

// DFS Approach: We use recursion and have a call stack.

const numIslandsDFS = (grid) => {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length,
    cols = grid[0].length;
  const visited = new Set();

  const dfs = (r, c) => {
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === "0" ||
      visited.has(`${r},${c}`)
    )
      return;

    visited.add(`${r},${c}`);
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1" && !visited.has(`${i},${j}`)) {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
};

// BigO
// Time Complexity: O(m * n) - because every cell is visited at most once.
// Space Complexity: O(n * m ) - because of recursive call stack.
