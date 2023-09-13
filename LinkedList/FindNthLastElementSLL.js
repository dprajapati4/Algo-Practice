// Create a function that returns the nth last element of a singly linked list.

// Solution 1: Store linked list in an array
// Con's: Takes up more space and now have two sets of the same data. O(N) space complexity.

const arrayNthLast = (list, n) => {
  const linkedListArray = [];

  let currentNode = list.removeHead();
  while (currentNode) {
    linkedListArray.push(currentNode);
    currentNode = currentNode.getNextNode();
  }
  return linkedListArray[linkedListArray.length - n];
};

/* BigO
Time Complexity: O(N)
There is one while loop, and in the worst case you must iterate through the entire list so the time complexity is O(N).
Space Complexity: O(N)
As the linked list grows the size of the array and the space needed for it grows.
*/

// Solution 2: Two pointers. Use two pointers at different positions in the list but moving at the same rate.
// Con's: If the list is less than n elements long, this will return null. O(N) time complexity.

const nthLastNode = (linkedList, n) => {
  let current = null;
  let tailSeeker = linkedList.head;
  let count = 0;
  while (tailSeeker) {
    tailSeeker = tailSeeker.next;
    //Current is lagging behind tailSeeker by n nodes while tailsSeeker is moving through the list. This way current will be n nodes away from the end.
    if (count >= n) {
      if (!current) {
        current = linkedList.head;
      }
      current = current.next;
    }
    count++;
  }
  return current;
};

/* BigO
Time Complexity: O(N)
There is one while loop, and in the worst case you must iterate through the entire list so the time complexity is O(N).
Space Complexity: O(1)
There are 3 new variables created regardless of the input so the amount of space taken by the function remains constant as N grows.
*/

// Solution 3: Two pointers going at different speeds. You need to find the middle pointer. The first pointer moves twice as fast as the first. When the first pointer reaches the end, the second pointer will be at the middle.

const findMiddle = (linkedList) => {
  let fastPointer = linkedList.head;
  let slowPointer = linkedList.head;

  // As long as the end of the list is not reached
  while (fastPointer !== null) {
    // Move the fast pointer at least one step
    fastPointer = fastPointer.getNextNode();
    // If it isn't at the end of the list
    if (fast !== null) {
      // Move both pointers forward once
      fastPointer = fastPointer.getNextNode();
      slowPointer = slowPointer.getNextNode();
    }
  }
  // At this point, the slow pointer is in the middle
  return slowPointer;
};

/* BigO
Time Complexity: O(N)
There is one while loop, and in the worst case you must iterate through the entire list so the time complexity is O(N).
Space Complexity: O(1)
There are 2 new variables created regardless of the input so the amount of space taken by the function remains constant as N grows.
*/
