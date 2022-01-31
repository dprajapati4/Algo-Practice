//Queues follow a FIFO pattern. Think of the line, the first person in a line is first to come out.
// Can be implemented using a Queue class or array.
// Used in background tasks, uploading, priniting/ task processes.

// Building a Queue with an array
// 1. If you add to the end, use .push, and remove from the begininng with .shift. However remember removing from the begininng of an array is unefficient, have to reindex every preceding item.
// 2. If you add to the begininng use .unshift, and remove from the end, using .pop. Adding to the begining also requires the preceding items to be reindexed.

// Queue Class
// Remeber if you add to the LL's head and remove from the tail via pop(the tail being the first item added to the list), you would have to traverse the list to reach the end each time.
// It is more efficient instead to add to the tail (Enque)and remove from the begining(Deque). So the first item added is the head.

class Node {
  constructor(value){
    this.value= value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // Adds to the end
  enque(value){
    // create a new node with the value passed in
    const newNode = new Node(value);
    // If the queue is empty, set this new node be the first and the last property in the stack.
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else {
      // if not empty, add the new node to the end, by assigning it to the old last node's next.
      this.last.next = newNode;
      this.last = newNode;
    }

    return this.size++;

  }
  // remove from the begininng
  dequeue(){
    // if queue is empty return null
    if(!this.first) return null;
    // If list is not empty, store the first item in a variable
    const temp = this.first;
    // if only 1 node in the queue set the last to be null
    if(this.first === this.last){
      this.last = null;
    }else{
      // If more than one item, set the first to be the prev first's next.
      this.first = this.first.next;
    }
    // return the removed node and decrement the size
    this.size--;
    return temp.value;
  }
}

const newQ = new Queue ();
newQ.enque("first");
newQ.enque("second");
newQ.enque("third");

console.log(newQ.dequeue())

// Big O Rem Queues should prioritize insertion and removal.
//Insertion/Removal O(1)
// Searching/Access O(N)

// Using an array would be O(n) time for insertion and removal