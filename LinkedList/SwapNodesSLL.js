//Swap two nodes in a singly linked list given data1 and data 2.

// Solution 1:
// Find the nodes that match data1 and data2. Keep track of their previous and next nodes.
// If node1Prev is null, then node1 is the head. Set the head to node2. If node2Prev is null, then node2 is the head. Set the head to node1.
// If neither node1Prev or node2Prev is null, then set node1Prev.next to node2 and node2Prev.next to node1.
// Finally set node1.next to node2.next and node2.next to node1.next.

function swapNodes(list, data1, data2) {
  let node1 = list.head;
  let node2 = list.head;
  let node1Prev = null;
  let node2Prev = null;

  //Edge case to handle if data1 and data2 are the same. No swap needed.
  if (data1 === data2) {
    console.log("Elements are the same - no swap needed.");
    return;
  }
  //Iterate through the list looking for a node that matches data1. Keep track of its previous and next node.
  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }
  //Do the same for node 2 and and data2.
  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }
  //Edge case to handle if node1 or node2 is null.
  if (node1 === null || node2 === null) {
    console.log("Swap not possible - one or more element is not in the list");
    return;
  }

  //Check is node1Prev is null. If so, node1 is the head. Set the head to node2.
  if (node1Prev === null) {
    list.head = node2;
  } else {
    //Otherwise, set node1Prev.next to node2.
    node1Prev.setNextNode(node2);
  }
  //Do the same for node2Prev.
  if (node2Prev === null) {
    list.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }
  //Finally, swap node1.next and node2.next. Do this by using a temp variable.
  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp);
}

/* BigO
Time Complexity: O(N)
There are two while loops, and in the worst case you must iterate through the entire list. This means each loop has a runtime of O(N) and O(2N) reduces to O(N).
Space Complexity: O(1)
There are 4 new variables created regardless of the input so the amount of space taken by the function remains constant as N grows.
*/
