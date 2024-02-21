// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Approach: We can use two pointers to traverse the linked lists and create a dummy node to keep track of the merged linked list. We can then compare the values of the two pointers and add the smaller value to the merged linked list. We can then move the pointer of the smaller value to the next node. At the end we check if one list has remaining values. Since the list is already sorted we can simply attach it to the end of our new list. We can then return the next node of the dummy node which will be the head of the merged linked list.

const mergeTwoLists = (list1, list2) => {
  const dummy = new ListNode();
  let temp = dummy;

  let l1 = list1;
  let l2 = list2;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      temp.next = l1;
      temp = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      temp = l2;
      l2 = l2.next;
    }
  }

  if (!l1) temp.next = l2;
  if (!l2) temp.next = l1;

  return dummy.next;
};

//BigO Time Complexity: O(n) -> one for loop
//BigO Space Complexity: O(1) -> no extra space used only two pointers and one dummy node created regardless of the size of the linked list
