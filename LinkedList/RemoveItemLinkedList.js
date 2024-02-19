//Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

//Approach: We can use two pointers to traverse the linked list. We can use one pointer to keep track of the previous node and the other pointer to keep track of the current node. If the current node's value is equal to the given value, we can remove the current node by setting the previous node's next pointer to the current node's next pointer. We can then move the current node to the next node. If the head's value is equal to the given value, we can set the head to the next node. We can then return the head of the linked list.
const removeElements = (head, val) => {
  if (!head) return null;

  let curr = head.next;
  let prev = head;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  if (head.val === val) {
    head = head.next;
  }

  return head;
};

//BigO Time Complexity: O(n) -> one for loop
//BigO Space Complexity: O(1) -> no extra space used
