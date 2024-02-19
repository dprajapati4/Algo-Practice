//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

//Approach: We can use two pointers to traverse the linked list. We can use one pointer to keep track of the previous node and the other pointer to keep track of the current node. If the current node's value is equal to the previous node's value, we can remove the current node by setting the previous node's next pointer to the current node's next pointer. We can then move the current node to the next node. We can then return the head of the linked list.
const deleteDuplicates = (head) => {
  if (!head || !head.next) return head;

  let prev = head;
  let curr = head.next;

  while (curr) {
    if (curr.val === prev.val) {
      prev.next = curr.next;

      curr = curr.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return head;
};

//BigO Time Complexity: O(n) -> one for loop
//BigO Space Complexity: O(1) -> no extra space used only two pointers
