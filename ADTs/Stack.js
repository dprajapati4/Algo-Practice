// Create a stack class that has the pop and push methods that follow LIFO.
// Adding and removing from a stack using a SLL, is constant time. Can be created using an array as well.
// Stacks are used in recursion(call stack), in undo/redo, and internet history.

// The Node class is needed as a way to store data. The node has properties of value and next.
import LinkedList from "../LinkedList/SinglyLinkedList.js";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// The class Stack has the properties of first, last and size.

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Adds value to the top of the stack
  push(value) {
    // create a new node with the input value
    var newNode = new Node(value);

    // If the stack is empty, let that new Node be the first and last item in the stack

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // if the stack is not empty, temporarily store the value of the current first.
      var temp = this.first;
      // Assign the new Node to be the first item in the stack.
      this.first = newNode;
      // Now point the next of the first node to the temp value.
      this.first.next = temp;
    }
    // increment the size of the stack by 1 and returns the value of the size.
    return this.size++;
  }

  // removes from the beginning
  pop() {
    // if the stack is empty return null
    if (!this.first) return null;
    // store the first value temporarily
    const temp = this.first;
    // If there is only 1 item in the stack reassign last value to be null.
    if (this.first === this.last) {
      this.last = null;
    } else {
      // if there is more than 1 item in the stack reassign the first to be the old first's next value.
      this.first = this.first.next;
    }
    // Decrement the value by one and return the removed first.
    this.size--;
    return temp.value;
  }
}

const newStack = new Stack();
newStack.push("first");
newStack.push("second");
newStack.push("third");

console.log(newStack.pop());

// Big O - Rem stacks should prioritize insertion and removal.
// Insertion and Removal O(1)
// Searching and Access O(n)

// Using an array would be O(n) time for insertion and removal

// Can also rewrite this using a singly linked list to implement a stack.

class StackFromLL {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  // Add helper methods below this line
  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      throw new Error("Stack is full");
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    } else {
      throw new Error("Stack is empty");
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }
}

const newStackFromLL = new StackFromLL();
newStack.push("first");
newStack.push("second");
newStack.push("third");

console.log(newStackFromLL.pop());
