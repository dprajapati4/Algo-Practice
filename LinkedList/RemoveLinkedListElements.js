// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Approach: The solution is straight forward when you think about removing nodes in the middle, you simply connect the prev to the current nodes next value. But the value we need to remove can also be at the head. So that makes this a bit more tricky. We can resolve this by creating a dummy node and initiate it with its next node being the head and store this in a prev variable. By doing this, if the head is a value we need to remove we can safely do so because now we have a prev variable that is a node. If we had just initiated prev variable with null, than we would have the scenario of prev.next = head.next, and if prev = null, than prev.next will throw an error.

var removeElements = function (head, val) {
  if (!head) return null;
  let dummy = new ListNode(0);
  dummy.next = head;
  let curr = head;
  let prev = dummy;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return dummy.next;
};

//BigO Time Complexity: O(n) -> one for loop
//BigO Space Complexity: O(1) -> no extra space used
