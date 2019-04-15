// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes, only nodes itself may be changed.

 

// Example:

// Given 1->2->3->4, you should return the list as 2->1->4->3.

var swapPairs = function(head) {
  //recursive case: look at head and look at head.next
  //if head.next is not null, store in a temporary variable
  //store head in a temporary variable
    //now make head = swaphead
      //head.next = oldhead
  //base case:
    //if head is null or head.next is null
  if (head === null || head.next === null) {
      return head;
  } 
      let newHead = head.next;
      let oldHead = head;
      let next = newHead.next;
      newHead.next = oldHead;
      oldHead.next = swapPairs(next);
      return newHead;

};