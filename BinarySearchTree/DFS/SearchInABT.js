// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

// Approach: Use dfs to traverse the levels of the binary tree. Since this is a binary search tree, we know that the left is less than the right. So we can compare the target value to the node value, if it is less than we recursively call the dfs on the left node if its higher we call it on the node.right.

const searchBST = (root, val) => {
  function dfs(node) {
    if (!node) return null;

    if (node.val === val) {
      return node;
    }
    return val < node.val ? dfs(node.left) : dfs(node.right);
  }

  return dfs(root);
};

// BigO
// Time: O(n) we traverse through all of the nodes during DFS
// Space: O(n) We calculate this from O(h) where h is the height of the tree, but it comes O(n) since the recursive call stack in the worst case will be the max height of the tree and equal the number of nodes,n, but a more balanced tree will have a log(n) space complexity.
