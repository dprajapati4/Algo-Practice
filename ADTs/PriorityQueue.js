// Priority Queues are commonly implemented using Binary Heaps
// It is a DS where each element has a priority level attached to it. Elements with higher priorities are served/retrieved before elements with lower priority.
// While you can implement a priority queue with array/list but its not as efficient.


// This example uses a min binary heap. This means a lower value means a higher priority.

// A node has a value and priority property
class Node {
  constructor(value, priority){
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

// When you add an element you need to pass the value and the priority
  enqueue(value,priority){
    let newNode = new Node(value,priority)
// Push the new node into the values arrray
    this.values.push(newNode);
// Call bubbleUp to ensure the new node is moved into the correct position
    this.bubbleUp();
  }

  bubbleUp(){
 // Store the value of the inserted element and its index
 let index = this.values.length-1;
 const element = this.values[index];
 //  Run this loop until the element is at the top most parent = its the largest value in the list
 while(index > 0){
 // Store the parent element and its index
   let parentIdx = Math.floor((index-1)/2);
   let parent = this.values[parentIdx];
 // If the element's priority is smaller than or equal to the parent's priority, break out of the loop
   if(element.priority >= parent.priority) break;
 // Otherwise swap the parent and element values and update the index and run again until the parent is greater than the element.
     this.values[parentIdx] = element;
     this.values[index] = parent;
     index = parentIdx;

 }

  }

  dequeue(){
     // Store the max/root value and pop off the last element and set it as the root.
     let min = this.values[0];
     let end = this.values.pop();
     // Checks for edge case, if there is only one item in the list, returns an empty list
     if(this.values.length > 0){
       this.values[0] = end;
       // New Root should sink down/ bubble down into right spot. Call bubble down to do so.
       this.sinkDown();
     }
     return min;
  }

  sinkDown(){
 // Store the start index and length and the root element value.
 let index = 0;
 const length = this.values.length;
 const element = this.values[0]

 while(true){
   // Find and store the left and right child indices and initalize the children varibles and set swap to false. swap keeps track of the index you want to swap with. Swap is reset to null every loop and only set if their is a value larger than the elemnt.
   let leftChildIndex = 2 * index+1;
   let rightChildIndex = 2 * index+2;
   let leftChild, rightChild;
   let swap = null;
   // Find the value of the children and ensure they are not out of bounds.
   if(leftChildIndex < length){
     leftChild = this.values[leftChildIndex];
   // Compare the leftChild and the element. If the left child is greater than the parent, store the leftchildIndex in swap
     if(leftChild.priority > element.priority){
       swap = leftChildIndex;
     }
   }
   if(rightChildIndex < length){
     rightChild = this.values[rightChildIndex];
     // Only want to swap to the largest value. So need two checks. One if did not swap with left child and right child is greater than the element. OR if you did swap with the left child, but the right child is greater than the left child.
     if(
        (swap === null && rightChild.priority < element.priority )||
        (swap !== null && rightChild.priority < leftChild.priority)) {
           swap = rightChildIndex
       }
   }
   // If there were no swaps break out of the loop
   if(swap === null) break;
   // Swap the element at the swap index and the topmost index
   this.values[index] = this.values[swap];
   this.values[swap] = element;
   // Update the index and continue looping
   index = swap;

    }
  }

}

let ER = new PriorityQueue();
ER.enqueue("cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);

// console.log(ER)
console.log(ER.dequeue())


// Big O
// Insertion and Removal = O(log N) as N grows the time it takes to insert and removes grows slower.

// Search = O(N) because they are not optimized for search better to use a BST. BH's are in any order and are meant to be as full and compact as possible.
