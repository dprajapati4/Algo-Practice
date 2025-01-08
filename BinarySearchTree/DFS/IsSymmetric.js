// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// Approach: Similar to IsSameTree we use dfs to traverse the tree, but we compare the left to right to see if mirror images match , like the example below
//       root
//    a    |   b
// 1 - 2   | 2 - 1

const isSymmetric = (root) => {
  if (!root) return true;

  function compare(a, b) {
    if (!a && !b) return true; // Both nodes are null, symmetric
    if (!a || !b) return false; // One is null, the other is not, not symmetric
    if (a.val !== b.val) return false; // Node values must match

    // Compare left subtree of `a` with right subtree of `b`, and vice versa -> bc we want to confirm tree is a mirror image
    return compare(a.left, b.right) && compare(a.right, b.left);
  }

  return compare(root.left, root.right);
};

// BigO
// Time: O(n) we traverse through all of the nodes during DFS
// Space: O(n) We calculate this from O(h) where h is the height of the tree, but it comes O(n) since the recursive call stack in the worst case will be the max height of the tree and equal the number of nodes,n, but a more balanced tree will have a log(n) space complexity.
