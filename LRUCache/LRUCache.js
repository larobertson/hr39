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
  this.capacity = capacity
  this.storage = {};
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