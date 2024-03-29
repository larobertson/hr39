// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?


 //Definition for singly-linked list.
 function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
* @param {ListNode} head
* @param {number} n
* @return {ListNode}
*/

var removeNthFromEnd = function(head, n) {
let follower = head;
let iterator = head;

while (iterator) {
iterator = iterator.next;
if (n-- < 0) {
  follower = follower.next;
}
}

if (n === 0) return follower.next;
follower.next = follower.next.next;
return head;
};

//Naive solution, fast, but takes up memory (space)
// var removeNthFromEnd = function(head, n) {
//     //iterate over linked list
//     //make a prev, curr, and next variables
//     //while !found (change to true when .next n times found)
//       //call .next n times on curr
//         //when n x .next is null
//         //remove that node
//         //set prev.next to next
//         //set curr.next to null
//         //mark found as true
//     //each time we check .next n times
//     //afterward, if we find it is nothing, change prev to curr, curr to next, and next to curr.next

//     //once we remove n, we should break the loop and return head (which should remain unchanged)

//     let prev = null;
//     let curr = head;
//     let next = head.next;
//     let found = false;
//     while (!found) {
//         let i = 0;
//         let nthNode = curr;
//         while (i < n) {
//             if (nthNode.next === null) {
//                 found = true;
//                 if (curr === head) { //the tricky part: if the removed element is head then we must reassign head
//                     head = head.next;
//                 }
//                 if (prev) {
//                     prev.next = next;
//                 }
//                 curr.next = null;
//             }
//             i++;
//             nthNode = nthNode.next;
//         }
//         if (!found) {
//             prev = curr;
//             curr = next;
//             next = curr.next;
//         }
//     }
//     return head;
// };

//O(n)