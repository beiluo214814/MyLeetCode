/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var dataAll = ['abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    var result = [];
    var temp;
    if(!digits)
          return result;
      
      result = dataAll[digits[0]-2].split('');
      digits = digits.slice(1);
      
      while(digits.length){
          var cur =  dataAll[digits[0]-2];
          var len = cur.length;
          temp = [];
          result.map(item=>{
              temp.push(item+cur[0]);
              temp.push(item+cur[1]);
              temp.push(item+cur[2]);
              if(len>3){
                   temp.push(item+cur[3]);
              }
          });
          result = temp;
          digits = digits.slice(1);
      }
      return result
  };