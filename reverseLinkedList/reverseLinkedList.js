// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
  //given head of linked list
  //return the linked list in reverse
  //hold previous node, current node, and next node
  //point head.next back
    //if it is the head, point it to null
      //moving forward from the head (on nextNode)
        //prevNode = currNode
        //currNode = nextNode
        //nextNode = currNode.next
      //point currNode.next to prevNode
  //continue until currNode.next is null
    //here point currNode.next to prevNode
  //return
  if (!head) {
      return null;
  }
  
  let curr = head;
  let prev = null;
  let next = head.next;
  while(curr) {
      curr.next = prev;
      prev = curr;
      curr = next;
      next = next && next.next; //next = next.next if both are true
  }
  return prev;
};

//
//
//
//Recursive solution
//
//
//
// var reverseList = function(head) {
//     //given head of linked list
//     //return the linked list in reverse
//     //recursive approach
//       //like pouring into a cup
//     if (!head || !head.next) {
//         //if there is nothing to reverse, return
//         //this should be the last node traversed
//         return head;
//     }
//     //So the stack builds up here 4 will be the first returned
//     let newHead = reverseList(head.next);
  
//     //4 reassign's 5's pointer to self
//     head.next.next = head;
//     //now dissolve current pointer (taken care of at each stack)
//     head.next = null;
//     //return 5 with new pointer
//     return newHead;
// };