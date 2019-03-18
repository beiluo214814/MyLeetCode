//https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length;
    var result = []
    nums.map(function(item,index){
        var rest = target - item;
        for(var i=index+1;i<len;i++){
            if( rest == nums[i]){
                result = [index,i]
                return false;
            }
        }
    });
    return result;
};