/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let max = 0,obj = {},j=1;
    for(let i=0,len = nums.length;i<len;i++){
       obj[nums[i]] = true;
       if(max < nums[i]){
           max = nums[i];
       }
    }
    
    if(!max){
        return 1
    }else{
        while(j<=max){
            if(!obj[j]){
                return j;
            }
            j++;
        }
        return j
    }
};