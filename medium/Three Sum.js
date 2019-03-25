//https://leetcode.com/problems/3sum/
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 *首先把数进行从小到大排序，接着进行遍历，以当前遍历的数为target，再引入两个指针，一个指向最小数，一个指向最大数。当两数之和小于-target，移动low指针，反之移动high指针。需要注意的是为了避免重复，在选取target和移动指针时，需要增加判断条件。
 */
var threeSum = function(nums) {
    nums.sort(function(a,b){
        return a-b;
    })
    var target,result=[],len=nums.length;
    for(var i=0;i<len;i++){
        if (target===nums[i]){
            continue;
        }
        else{
            target=nums[i];
        }
        var low=i+1,high=len-1;
        while(low<high){
            if(nums[low]+nums[high]===-target){
                result.push([target,nums[low],nums[high]]);
                do{
                   low++; 
                }while(nums[low]===nums[low-1]);
            }
            else if(nums[low]+nums[high]<-target){
                low++;
            }
            else{
                high--;
            }
        }
    }
    return result;
};