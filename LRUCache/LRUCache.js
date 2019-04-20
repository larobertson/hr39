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