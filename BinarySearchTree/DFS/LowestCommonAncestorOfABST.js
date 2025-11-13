// Given a binary search tree (BST) where all node values are unique, and two nodes from the tree p and q, return the lowest common ancestor (LCA) of the two nodes.

// The lowest common ancestor between two nodes p and q is the lowest node in a tree T such that both p and q as descendants. The ancestor is allowed to be a descendant of itself.

// Approach: Utilize the fact that this is a binary search tree, and that values to the left of a root are less than values to the right.

const lowestCommonAncestor = (root, p, q) => {
  if (!root || !p || !q) return null;

  if (Math.max(p.val, q.val) < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (Math.min(p.val, q.val) > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};

// BigO
// Time: O(n) - n is the number of nodes in the BST, in the worst case we traverse through all of the nodes.
// Space: O(n) - The potential max size of a recursion/call stack can be n, where n is number of nodes.
