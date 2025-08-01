// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// BFS Approach: Use a queue to traverse level by level and push those values into the results array.

const levelOrderBFS = (root) => {
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
      if (node.right) {
        queue.push(node.right);
      }
    }
    results.push(temp);
  }

  return results;
};

// BigO
// Time: O(n) we traverse through all of the nodes during BFS
// Space: O(n) Because we create a queue that holds at max n items.
