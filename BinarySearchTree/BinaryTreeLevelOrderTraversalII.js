// Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

// Approach: Use BFS to do level by level traversal. BFS uses a queue to iterate over each level, build the results array by adding to the front, this will help add the last level to the beginning of the results array.

const levelOrderBottomBFS = (root) => {
  if (!root) return [];

  let queue = [root];
  let results = [];

  while (queue.length) {
    let level = [];
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) queue.push(node.right);
    }
    results.unshift(level);
  }

  return results;
};


// BigO
// Time: O(n) we traverse through all of the nodes during BFS
// Space: O(n) Because we create a queue that holds at max n items.
