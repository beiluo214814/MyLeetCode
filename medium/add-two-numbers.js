/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var target = new ListNode(0);
    var result = target;
    
    var temp1 = l1,temp2 = l2;
    var temp1val = 0,temp2val = 0,sum = 0;
    while( temp1 || temp2 || sum){
        temp1val = temp1 ? temp1.val : 0;
        temp2val = temp2 ? temp2.val : 0;
        sum += temp1val + temp2val;
        
        target.next = new ListNode(0);
        target = target.next;
        target.val = sum%10;
        
        sum = Math.floor(sum/10);
        
        temp1 = temp1 ? temp1.next:null;
        temp2 = temp2 ? temp2.next:null;
    }
    return result.next;
};