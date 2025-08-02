// Given the root of a binary tree, return its maximum depth.A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Approach: Similar to Minimum Depth Of Binary Tree. Use DFS to traverse the tree. We check if there is not left we traverse and recursively call the right, and if there is no right we traverse recursively call the left and add 1 to indicate moving a level deeper. Lastly if there are both left and right nodes, we recursively call maxDepth on both and then return the max of both and add 1 for the root node.

const maxDepth = (root) => {
  // Base case indicates empty tree or that we have traversed through all the nodes in the tree
  if (!root) return 0;

  if (!root.left) return maxDepth(root.right) + 1;
  if (!root.right) return maxDepth(root.left) + 1;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// Big O
// Time Complexity: O(n) because in DFS we visit each node 1 time.
// Space: O(n) We calculate this from O(h) where h is the height of the tree, but it comes O(n) since the recursive call stack in the worst case will be the max height of the tree and equal the number of nodes,n, but a more balanced tree will have a log(n) space complexity.
