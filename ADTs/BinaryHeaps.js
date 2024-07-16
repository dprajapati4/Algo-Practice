// Binary Heaps are like trees. There are two main kinds, maxBinaryHeap and minBinaryHeap. For maxBHs, the parent node must always be bigger than the child and for minBHs the parent node is always smaller than the child. Siblings are not in any order.
// Binary heaps are as compact as possible. All children node are are full as possible. The left child is filled first.
// Binary Heaps are useful in creating Priority Queues and graph traversals.

class maxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    // Add value to the end of the list
    this.values.push(element);
    // Calls the bubble up function which compares the inserted element to the parent and swaps them if the inserted element is greater than the parent value.
    this.bubbleUp();
  }

  bubbleUp() {
    // Store the value of the inserted element and its index
    let index = this.values.length - 1;
    const element = this.values[index];
    //  Run this loop until the element is at the top most parent = its the largest value in the list
    while (index > 0) {
      // Store the parent element and its index
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.values[parentIdx];
      // If the element is smaller than or equal to the parent, break out of the loop
      if (element <= parent) break;
      // Otherwise swap the parent and element values and update the index and run again until the parent is greater than the element.
      this.values[parentIdx] = element;
      this.values[index] = parent;
      index = parentIdx;
    }
  }

  extractMax() {
    // Store the max/root value and pop off the last element and set it as the root.
    let max = this.values[0];
    let end = this.values.pop();
    // Checks for edge case, if there is only one item in the list, returns an empty list
    if (this.values.length > 0) {
      this.values[0] = end;
      // New Root should sink down/ bubble down into right spot. Call bubble down to do so.
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    // Store the start index and length and the root element value.
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      // Find and store the left and right child indices and initialize the children variables and set swap to false. swap keeps track of the index you want to swap with. Swap is reset to null every loop and only set if their is a value larger than the element.
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      // Find the value of the children and ensure they are not out of bounds.
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        // Compare the leftChild and the element. If the left child is greater than the parent, store the leftChildIndex in swap
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        // Only want to swap to the largest value. So need two checks. One if did not swap with left child and right child is greater than the element. OR if you did swap with the left child, but the right child is greater than the left child.
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      // If there were no swaps break out of the loop
      if (swap === null) break;
      // Swap the element at the swap index and the topmost index
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      // Update the index and continue looping
      index = swap;
    }
  }
}

let heap = new maxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.extractMax();
console.log(heap.values);

// Min Binary Heaps track the minimum value. It follows two main rules, the child cannot be of lesser value than the parent and the element at index 1, is the minimum value of the entire heap. We use an array to mimic a binary tree to build this.

class MinHeap {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }

  popMin() {
    if (this.size === 0) {
      return null;
    }
    const min = this.heap[1];
    this.heap[1] = this.heap[this.size];
    this.heap.pop();
    this.size--;
    this.heapify();
    return min;
  }

  add(value) {
    this.heap.push(value);
    this.size++;
    this.bubbleUp();
  }

  bubbleUp() {
    let current = this.size;
    let swapCount = 0;
    while (current > 1 && this.heap[getParent(current)] > this.heap[current]) {
      this.swap(current, getParent(current));
      current = getParent(current);
      swapCount++;
    }
    if (this.size == 10000) {
      console.log(
        `Heap of ${this.size} elements restored with ${swapCount} swaps`
      );
    }
  }

  heapify() {
    let current = 1;
    let leftChild = getLeft(current);
    let rightChild = getRight(current);
    let swapCount = 0;

    while (this.canSwap(current, leftChild, rightChild)) {
      // Only compare left & right if they both exist
      if (this.exists(leftChild) && this.exists(rightChild)) {
        // Make sure to swap with the smaller of the two children
        if (this.heap[leftChild] < this.heap[rightChild]) {
          this.swap(current, leftChild);
          current = leftChild;
          swapCount++;
        } else {
          this.swap(current, rightChild);
          current = rightChild;
          swapCount++;
        }
      } else {
        // If only one child exist, always swap with the left
        this.swap(current, leftChild);
        current = leftChild;
        swapCount++;
      }
      leftChild = getLeft(current);
      rightChild = getRight(current);
    }
    if (this.size == 9999) {
      console.log(
        `Heap of ${this.size} elements restored with ${swapCount} swaps`
      );
    }
  }

  exists(index) {
    return index <= this.size;
  }

  canSwap(current, leftChild, rightChild) {
    // Check that one of the possible swap conditions exists
    return (
      (this.exists(leftChild) && this.heap[current] > this.heap[leftChild]) ||
      (this.exists(rightChild) && this.heap[current] > this.heap[rightChild])
    );
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

const getParent = (current) => Math.floor(current / 2);
const getLeft = (current) => current * 2;
const getRight = (current) => current * 2 + 1;
