/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    var len = nums.length;
    var lastResult = [];
    for(var i=0;i<len;i++){
        nums1 = nums.slice(i+1,len);
        if(i>0 && nums[i] === nums[i-1]){
            continue;
        }
        var obj = {};
        var result = [];
        var target = 0-nums[i];
        nums1.map(item=>{
            var rest = target - item;
            if(obj.hasOwnProperty(item)){
                var arrTemp = [obj[item],rest,0-target];
                result.push(arrTemp);
            }else{
                obj[rest] = rest;
            }
        })
        lastResult = lastResult.concat(result);
    }
    return lastResult;
};

console.log(threeSum([0,0,0,0]))
