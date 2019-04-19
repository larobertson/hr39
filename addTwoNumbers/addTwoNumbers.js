// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

 //Definition for singly-linked list.
 function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
//given: two non-empty linked lists representing non-negative integers
  //each node contains a single digit, in reverse order (right to left)
//edge cases:
  //no leading zeros
  //can be different lengths
  //cannot be negative
  //cannot be empty

//this aligns our tens places up left to right
  //first node will always be added together
  //second... and so on
//when a node is greater than 9, carry value to the next nodes
//if one list ends, but the other continues, count nulls as 0's
  //continue adding until BOTH lists are null

//we should be creating a new linked list as we add
//iterate over l1 & l2
//look at l1.val and l2.val
//add these together and make a new ListNode with this val
  //round 1 is simple, no need to link yet
  //hold this in a variable
  //then next round create the sum node
  //link prev.next to sum
//do this until BOTH linked lists are null
//while (l1 || l2)
//if l1 is null
  //add l2 + carry
//if l2 is null
  //add l1 + carry
//carry should be reset to 0 after use
//move both l1 & l2 to = .next

let carry = 0;
let prev = null;
let sum = 0;
let node;
let head;
while(l1 || l2) {
    if (l1 && l2) {
        sum = l1.val + l2.val + carry;
    } else if (l1 && !l2) {
        sum = l1.val + carry;
    } else if (l2 && !l1) {
        sum = l2.val + carry;
    } 
    
    if (sum > 9) {
        carry = 1;
        sum = sum - 10;
    } else {
        carry = 0;
    }
    
    node = new ListNode(sum);
    if (prev) {
        prev.next = node;
    } else if (prev === null) {
        head = node;
    }
    prev = node;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
}
if (carry) {
    node = new ListNode(carry);
    if (prev) {
        prev.next = node;
    }
}
return head;
};
