/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 
 * 用栈来做，思路是从根节点开始，先将根节点压入栈，然后再将其所有左子结点压入栈，然后取出栈顶节点，保存节点值，再将当前指针移到其右子节点上，若存在右子节点，则在下次循环时又可将其所有左子结点压入栈中。
 */
var inorderTraversal = function(root) {
    let res = [],s = [],p = root;
    while(s.length || p){
        if(p){
            s.push(p);
            p = p.left;
        }else{
            p = s.pop();
            res.push(p.val);
            p = p.right;
        }
    }
    return res
};