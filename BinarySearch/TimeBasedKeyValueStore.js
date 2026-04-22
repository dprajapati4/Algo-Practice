// Implement a time-based key-value data structure that supports:

// Storing multiple values for the same key at specified time stamps
// Retrieving the key's value at a specified timestamp
// Implement the TimeMap class:

// TimeMap() Initializes the object.
// void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
// String get(String key, int timestamp) Returns the most recent value of key if set was previously called on it and the most recent timestamp for that key prev_timestamp is less than or equal to the given timestamp (prev_timestamp <= timestamp). If there are no values, it returns "".
// Note: For all calls to set, the timestamps are in strictly increasing order.

// Approach: Using a Map and Binary Search. We are creating a key value store, but the value is twofold, the value and a timestamp, so for the set we can store the values as a tuple in an array since a key can have multiple values per different timestamps. The get, its a bit more complicated, we can iterate over the entire array, but since we are told that the timestamps are in increasing order, the timestamps are sorted, so we can use binary search to increase the performance.

class TimeMap {
  constructor() {
    this.keyStore = new Map();
  }

  set(key, value, timestamp) {
    if (!this.keyStore.get(key)) {
      this.keyStore.set(key, []);
    }
    this.keyStore.get(key).push([timestamp, value]);
  }

  get(key, timestamp) {
    let values = this.keyStore.get(key);
    if (!foundKey) return "";

    // do binary search
    let left = 0;
    let right = values.length - 1;
    let res = "";
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (values[mid][0] <= timestamp) {
        res = values[mid][1];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return res;
  }
}
// BigO
// Time: O(1) for set and O(logn) for get since we do binary search
// Space: O(m * n) where m is the number of keys and n the values associated to each key

// Test with
// Input:
// ["TimeMap", "set", ["alice", "happy", 1], "get", ["alice", 1], "get", ["alice", 2], "set", ["alice", "sad", 3], "get", ["alice", 3]]

// Output:
// [null, null, "happy", "happy", null, "sad"]

// Explanation:
// TimeMap timeMap = new TimeMap();
// timeMap.set("alice", "happy", 1);  // store the key "alice" and value "happy" along with timestamp = 1.
// timeMap.get("alice", 1);           // return "happy"
// timeMap.get("alice", 2);           // return "happy", there is no value stored for timestamp 2, thus we return the value at timestamp 1.
// timeMap.set("alice", "sad", 3);    // store the key "alice" and value "sad" along with timestamp = 3.
// timeMap.get("alice", 3);           // return "sad"
