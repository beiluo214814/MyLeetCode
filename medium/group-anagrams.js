/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var obj = {};
    var result = [];
    var sortedStr;
    strs.map(item=>{
        sortedStr = item.split('').sort().join('');
        if(obj.hasOwnProperty(sortedStr)){
            result[obj[sortedStr]].push(item);
        }else{
            obj[sortedStr] = result.length;
            result.push([item]);
        }
    });
    return result
};