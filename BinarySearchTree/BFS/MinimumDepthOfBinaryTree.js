//Given a binary tree, find its minimum depth.The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

//Approach: BFS to traverse each level of the tree and use the idea that leaf nodes higher up in the tree will be at a lower level than a leaf node lower in the tree. Thus once you find the first leaf node in the tree, this is the minimum depth of a leaf node for the tree. So using BFS, we set up a queue and a variable to track the depth. While we have nodes in out queue, we iterate over that level bc the number of tree nodes per level = queueLength, we return once we are a leaf node = no left or right children nodes. Otherwise we shift off the first node and increase the depth and then iterate over the next level until we find the leaf node.

const minDepthBFS = (root) => {
  if (!root) return 0;

  const queue = [root];
  let depth = 1;

  while (queue.length > 0) {
    let queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const currentNode = queue.shift();

      if (!currentNode.left && !currentNode.right) {
        return depth;
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    depth++;
  }
};

//Big O
//Time : O(n) because in BFS we visit each node 1 time.
//Space : O(n) because in the worst case, we have a height of tree that is equal to the number of nodes -> skewed binary tree, and thats how many nodes the queue we create would have to hold.

// Approach: DFS to traverse each level and use the same logic in the BFS solution. Traverse each level and track the depth until we have reach the first leaf node. In DFS, our base cases is when the root node is null we return 0. Starting with the root, we check if there is a left if there isn't, we recursively call minDepthDFS on the right, if there isn't a right, we recursively call minDepthDFS on the left. If both left and right subtrees exist, recursively calculate the minimum depth
const minDepthDFS = (root) => {
  if (!root) return 0;

  if (!root.left) {
    return minDepth(root.right) + 1;
  }

  if (!root.right) {
    return minDepth(root.left) + 1;
  }

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

//Big O
//Time: O(n) because we visit every node during DFS
//Space : O(n) because in the worst case, we have a height of tree that is equal to the number of nodes -> skewed binary tree and each node only has one child. So the max number of recursive calls is related to the height of the tree. But in balanced binary tree, the heigh is log(n) which results in an O(log n) space complexity.
