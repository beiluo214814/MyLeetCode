//https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     var len = nums.length;
//     var obj = {};
//     for(var j=0;j<len;j++){
//         var item = nums[j];
//         var rest = target - item;
//         if(obj.hasOwnProperty(item)){
//             return [obj[item],j]
//         }else{
//             obj[rest] = j;
//         }
//     }
// };

var twoSum = function(nums, target) {
    var len = nums.length;
    var obj = {};
    var result = [];
    nums.map(item=>{
        var rest = target - item;
        if(obj.hasOwnProperty(item)){
            result.push([obj[item],rest,target])
        }else{
            obj[rest] = rest;
        }
    })
   return result;
};

console.log(twoSum([1,2,2,4,4],6))