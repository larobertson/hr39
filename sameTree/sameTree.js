/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q, valid = true) {
  //traverse the trees
  //given roots p & q
  //return true/false on whether they are same
  
  //base case: p || q === null
  //recursive case:
    //check if value at p === q
    //if not return false
    //else call isSameTree(p.left, q.right)
  
  //return valid
  if (p === null && q === null) { //edge case, both are null
      return valid;
  } else if (p === null || q === null) { //edge case, one is null
      valid = false;
  } else if (p.val !== q.val) { //p & q are not the same
      valid = false;
  } else { //returns true if both are true, otherwise returns false
      valid = isSameTree(p.left, q.left, valid) && isSameTree(p.right, q.right, valid)
  }
  return valid;
};