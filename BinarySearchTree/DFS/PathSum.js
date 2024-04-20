// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum. A leaf is a node with no children.

// Approach: Use DFS to traverse the tree. Recursively call hasPathSum on the left and/or right node with target sum now being the targetSum minus the current nodes value. Meaning if you reach the end a leaf node the target sum should equal exactly the value of the leaf node.

const hasPathSum = (root, targetSum) => {
  // Base case
  if (!root) return false;
  // Base case = at a leaf node
  if (!root.left && !root.right) return root.val === targetSum;
  else {
    return (
      hasPathSum(root.left, targetSum - root.val) ||
      hasPathSum(root.right, targetSum - root.val)
    );
  }
};

// BigO
// Time: O(n) we traverse through all of the nodes during DFS
// Space: O(n) We calculate this from O(h) where h is the height of the tree, but it comes O(n) since the recursive call stack in the worst case will be the max height of the tree and equal the number of nodes,n, but a more balanced tree will have a log(n) space complexity.
