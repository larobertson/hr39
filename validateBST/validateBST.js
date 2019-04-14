/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min = -Infinity, max = Infinity) {
  if (!root) { //if root does not exist
      return true;
  } else if (root.val <= min) { 
      return false;
  } else if (root.val >= max) {
      return false;
  } else {
      //left side keeps lower boundary open, and makes the upper boundary the root of the 'tree' before
      //right does the opposite for right
        //lower boundary becomes the value of the root before
      //this makes it so the branch does not get larger than the node above its tree, or vice versa
        //does not get smaller than the node above its tree
        //   5
        //  / \
        // 1   6
        //    / \
        //   3   7  <----- for example, the three here is smaller than five, so it should always be on the left
      return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max) //here is the magic
  }   
};