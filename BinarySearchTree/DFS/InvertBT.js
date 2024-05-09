// Given the root of a binary tree, invert the tree, and return its root.

// Approach: Given a root swap the left and right node values, and then recursively call the the function on the left and right nodes.

const invertTree = (root) => {
  if (!root) return null;

  root.left = root.right ? root.right : null;
  root.right = root.left ? root.left : null;

  root.left = left;
  root.right = right;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

//BigO
//Time: O(n) we traverse through all of the nodes during DFS
//Space: O(n) We calculate this from O(h) where h is the height of the tree, but it comes O(n) since the recursive call stack in the worst case will be the max height of the tree and equal the number of nodes,n, but a more balanced tree will have a log(n) space complexity.
