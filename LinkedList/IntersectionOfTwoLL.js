// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
//Solution 1: Because the lists can be of different lengths comparing them can be hard. Combining or concatenating the lists can make it easier to compare.

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getIntersectionNode = (headA, headB) => {
  let a = headA;
  let b = headB;

  while (a !== b) {
    //While a and b are not null continue to traverse through its respective list. If a is null, set a to headB. If b is null, set b to headA so that they can continue to traverse through the other list.
    a = !a ? headB : a.next;
    b = !b ? headA : b.next;
  }
  //Once a and b are equal, return a. If no intersection is found, a will be null after it has traversed through both lists.
  return a;
};

/* BigO
Time Complexity: O(N)
There is one while loop, and in the worst case you must iterate through the entire list so the time complexity is O(N).
Space Complexity: O(1)
There are 2 new variables created regardless of the input so the amount of space taken by the function remains constant as N grows.
*/
