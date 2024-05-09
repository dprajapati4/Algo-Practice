// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// Approach: This problem of a combination of two previously solved problems : isSameTree and DFS. Create a helper function, which checks if two trees are the same tree. Than create another function that traverse the tree in a DFS manner and calls the helper function on any subtree of the root node and the subtree we are given as an input.

const isSubtree = (root, subRoot) => {
  const isSameTree = (r, s) => {
    if (!r || !s) return !r && !s;
    if (r.val !== s.val) return false;

    return isSameTree(r.left, s.left) && isSameTree(r.right, s.right);
  };

  const dfs = (node) => {
    if (!node) return false;
    if (isSameTree(node, subRoot)) return true;

    return dfs(node.left) || dfs(node.right);
  };

  return dfs(root);
};

// BigO
// Time: O(n^2) ---> O(n * m) we traverse through all of the nodes of the root, n and also all of the nodes of m, the subtree. In the worst case the subtree = the same as the whole tree so m =n --> O(n*n) = O(n^2)
// Space: O(n) We calculate this from O(h) where h is the height of the tree, but it comes O(n) since the recursive call stack in the worst case will be the max height of the tree and equal the number of nodes,n, but a more balanced tree will have a log(n) space complexity.
