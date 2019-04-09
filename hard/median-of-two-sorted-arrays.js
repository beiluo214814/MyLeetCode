/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len1 = nums1.length,len2 = nums2.length;
    var minNums, maxNums, result;
    while(len1 || len2){
        var restNum = len1 + len2;
        if(restNum === 2){
             result = nums1.concat(nums2);
             return (result[0]+result[1])/2;
        }else if(restNum === 1){
             return nums1.concat(nums2)[0];
        }else{
            if( len1 && len2){
                minNums = nums1[0] < nums2[0] ? nums1 :nums2;
                maxNums = nums1[len1-1] > nums2[len2-1] ? nums1 : nums2;
            }else if(len1 == 0 && len2){
                minNums = nums2;
                maxNums = nums2;
             }else{
                minNums = nums1;
                maxNums = nums1;
             }
             minNums.shift();
             maxNums.pop();
        }
        len1 = nums1.length,len2 = nums2.length;
    }
};