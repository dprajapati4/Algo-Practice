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
