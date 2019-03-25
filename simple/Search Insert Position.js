/**
 * https://leetcode.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var len = nums.length
    var i=0,j=len-1;
    while(nums[i] < nums[j]){
        if(target<=nums[i] && i==0){
            return 0
        }
        if(target>=nums[j] && j==len-1){
            return len
        }
        if(target == nums[i]){
           return i
        }
        if(target == nums[j]){
            return j
        }
       i++;
       j--;
    }
    return i-1;
};

console.log(searchInsert([1,3,5,6],2))