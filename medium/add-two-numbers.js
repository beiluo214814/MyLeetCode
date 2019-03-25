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
    var result = l1;
    var resultList = [];
    var temp1 = l1,temp2 = l2,add = false;
    while( temp1 || temp2 || add){
        var sum = 0;
        if(add){
            sum++;
        }
        if(temp1 && temp2){
            sum += temp1.val+temp2.val;
            if( sum > 9){
                resultList.push(sum%10);
                add = true;
            }else{
                resultList.push(sum);
                add = false;
            }
            temp1 = temp1.next;
            temp2 = temp2.next;
        }else if(temp1 && !temp2){
           sum += temp1.val;
            if( sum > 9){
                  resultList.push(sum%10);
                add = true;
            }else{
                resultList.push(sum);
                add = false;
            }
           temp1 = temp1.next;
        }else if(temp2 && !temp1){
           sum += temp2.val; 
            if( sum > 9){
                resultList.push(sum%10);
                add = true;
            }else{
                resultList.push(sum);
                add = false;
            }
           temp2 = temp2.next;
        }else if(sum){
            resultList.push(sum);
            add = false;
            break
        }else{
             break;
        }
    }
    var next = null;
    var listLen = resultList.length;
    for(i=listLen-1;i>=0;i--){
        var newObj = new ListNode(resultList[i]);
        newObj.next = next;
        next = newObj;
    }
    return newObj;
};