// Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

// Approach: Use DFS to compute the tree's height. Similar to Maximum Depth of Binary Tree. Plus the idea that an empty tree had

// calculate the height of each branch - is a dfs
function getHeight(node) {
  if (!node) return -1;

  return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

const isBalanced = (root) => {
  if (!root) return true;
  // Check if subtrees have height within 1. If they do, check if their subtrees are balanced
  return (
    Math.abs(getHeight(root.left) - getHeight(root.right)) < 2 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};

// BigO
// Time: O(nlogn) we traverse through all of the nodes during DFS and we return early if a subtree in not balanced.
// Space: O(n) because in the worst case the call stack may contain all nodes if the tree is skewed.
