/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let len = nums.length;
    if(len < 2){
        return len;
    }
    let firstValue = nums[1]-nums[0];
    let resultLen = firstValue != 0 ? 2 : 1;
    let i = 2;//正数为true
    while(i<len){
        let num = nums[i]-nums[i-1];
        if((firstValue >= 0 && num < 0) || (firstValue <= 0 && num > 0)){
            resultLen++;
            firstValue = num;
        }
        i++;
    }
    return resultLen;
};

console.log(wiggleMaxLength([3,3,3,2,5]));
