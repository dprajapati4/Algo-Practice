// A Hashtable is used to store key-value pairs and they are not ordered
// They are very fast to find, add and remove values.

// This is an example of recreating a hash table via a array

// In order to look up a value by its key in an array we need a way to convert the keys into value indices.
// A hash function performs this task. It takes an input and when you pass that to the hash function it return the same number/value every time that same input is passed to the hash function.
// A good hash function is fast(constant time), distributes things uniformly so outputs are not clustered, and deterministic(one input === one output)
// Including prime number in hash tables significantly decreases collisions.

// Two ways to avoid collisions 1.) Separate Chaining and 2.) Linear Probing
//1.) Separate Chaining: At each index of the array we store values using a more complex DS like a array or ll. This allows us to store multiple key-value pairs at the same index
// 2.) Linear Probing you only store one piece of data at each index. If we do have a collision we place that data at the next open spot

class HashTable {
  // accepts a size for how large the hash table should be. It defaults to 53 a prime number
  constructor(size = 53) {
    // a new variable stores a new array of that size
    this.keyMap = new Array(size);
  }

  // A simple hash function that converts strings to their charcode number
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
