// Design and implement a data structure for Least Recently Used (LRU) cache. It should 
// support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, 
// otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache 
// reached its capacity, it should invalidate the least recently used item before inserting a 
// new item.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

/**
 * @param {number} capacity
 */
const LRUCache = function(capacity) {
  //this is the cache constructor
  //capacity is how much it can hold in storage  
  this.dll = new DoublyLinkedList(); //each Cache will have access to a list
  this.capacity = capacity
  this.storage = {}; //this will be used for constant time lookup, not LRU/MRU
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  //look at this.storage for key
  //if key exists return its value
  //if it doesn't, return -1
  //move key to the tail of the cache
  let node = this.storage[key];
  
  if (this.dll.tail === node) {
      return node;
  }
  
  if (node) {
      this.dll.moveToTail(node);
      return node.value;
  } else {
      return -1;
  }
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  //if this.storage for key, revert to get method
  //if not check if cache is at capacity
    //if no, add to tail and decrement capacity
    //if yes, remove head (LRU), and add to tail
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

//An LRUCache is created
//It can get an existing key or put a new key
//any time these are called, the key goes to the end of the line, to the most recently used cache
//once the cache fills up and a new put is used
  //the LRU cache is deleted, and the new put is added to the end of the line (MRU cache)

const ListNode = function(key, value){
  this.key = key;
  this.val = value;
  this.prev = null;
  this.next = null;
}


class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }
  
  addToTail(key, value, item = null) {
      let node = item || new ListNode(key, value)
      
      if (!this.tail) {
          //empty list: make node both head and tail
          this.head = node;
          this.tail = node;
      } else {
          node.prev = this.tail;
          this.tail.next = node;
          this.tail = node;
      }
      return node;
  }
  
  removeFromHead () {
      //handle edge cases
      if (!this.head) {
          return null;
      }
      
      const toRemove = this.head;
      if (this.head === this.tail) {
          //if list is only one in length;
          this.head = null;
          this.tail = null;
      } else {
          this.head = this.head.next;
          this.head.prev = null; 
      }
      return toRemove;
     
  }
  
  moveToTail (node) {
      if (this.tail === node) {
          return node;
      }
      
      //if node is tail just return node
      //if it's head, follow remove from head then add to tail
      if (this.head === node) {
          this.removeFromHead();
      }
      
      //reassign prev and next (with destructuring)
      const {prev, next} = node;
      if (prev) {
          prev.next = next;
      }
      if (next) {
          next.prev = prev;
      }
      
      return this.addToTail(null, null, node); 
  }
}