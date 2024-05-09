// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Approach: Create a new tree with the sum of t1 + t2 and recursively call on left and right and then set the left and right nodes of the newly created tree.

const mergeTrees = (root1, root2) => {
  //if only one tree, add return that tree
  if (root1 === null) return root2;
  if (root2 === null) return root1;

  const root = new TreeNode(root1.val + root2.val);

  const left = mergeTrees(root1.left, root2.left);
  const right = mergeTrees(root1.right, root2.right);

  root.left = left;
  root.right = right;

  return root;
};

//Big O
//Time: O(n) because we visit every node during DFS
//Space: O(n) We calculate this from O(h) where h is the height of the tree, but it comes O(n) since the recursive call stack in the worst case will be the max height of the tree and equal the number of nodes,n, but a more balanced tree will have a log(n) space complexity.
