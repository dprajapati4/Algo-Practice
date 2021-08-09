class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null
  }

  insert(value){
    // create a new node with the value
    let newNode = new Node(value);
    // check if a root exists if not the new node as the root
    if(this.root === null){
      this.root = newNode;
      return this;
    }else{
      // initialize variable that starts at the root and will be updated as we traverse the tree
      let current = this.root;
      // runs a loop while true and will use return to break out of loop
      while(true){
      // edge case that takes care of duplicates
        if( value === current.value) return undefined
     // checks if value is less than the current and then if there is a node to the left of the current value. If not it sets it as the left value.
        if(value < current.value){
          if(current.left === null){
            current.left = newNode;
            return this;
          }else{
            // if there is a current.left, it makes the current that left node and then checks again.
            current = current.left;
          }
        }else if(value > current.right){
          if(current.right === null){
            current.right = newNode;
            return this;
          }else{
            current = current.right;
          }
        }

      }
    }



  }

  find(value){
    // check if there is a root
    if(this.root === null) return null;
    // Initalize a current and found variable
    let current = this.root;
    let found =false;

    // while the value is not found and there are nodes in the tree
    while(current && !found){
      if(value < current.value){
        // if the value is less than current, then we need to check on the left side of the tree
        current = current.left
      }else if( value > current.value){
        // if the value is greater than current, we need to check the right side of the tree.
        current = current.right
      }else {
        // if the value is not less than or greater than current, than the current must equal the value
        found = true;
      }
    }
    // if value is not in BST return undefined
    if(!found) return undefined;
    // return the node if found
    return current;

  }

}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);


console.log(tree.find(2))


// Big O
// Insertion/ Searching O(log n)
// When you double the size of the BST, you only increase the number of steps to find/insert by 1.
// But this is not guaranteed. For example and extremely one side BST