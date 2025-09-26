// Design a stack class that supports the push, pop, top, and getMin operations.

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// Each function should run in O(1) time.

// Remember - a stack follows a LIFO approach. Can be implemented with an array or linked list. Most difficult part is maintaining the min number and being able to retrieve it in O(1) time.

// Approach: Brute Force:

// Approach: Use two stacks. One that you add and remove values from and another stack that you use to track the min value at that point. Each time you add to the stack, you compare to the current min - the top most value of the minStack, and update it accordingly. When you remove from the stack remove from the minStack too and it should have the min at that point at the top.

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    if (this.stack.length === 0) {
      this.stack.push(val);
      this.minStack.push(val);
    } else {
      let currMin = Math.min(val, this.minStack[this.minStack.length - 1]);
      this.minStack.push(currMin);
      this.stack.push(val);
    }
  }

  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
obj.push(1);
obj.pop();
const param_3 = obj.top();
const param_4 = obj.getMin();

console.log(obj, param_3, param_4);

// BigO
// Time Complexity: O(1) for all operations.
// Space Complexity:  O(n) -> Worst case is that all the operations push to stack so there will be O(2⋅n)=O(n) space used.
