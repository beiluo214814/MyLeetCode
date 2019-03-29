/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var obj = {};
    var result = [];
    var itemArr,sortedStr;
    strs.map(item=>{
        itemArr = item.split('');
        itemArr.sort((a,b)=>a.charCodeAt()-b.charCodeAt());
        sortedStr = itemArr.join('');
        if(obj.hasOwnProperty(sortedStr)){
            result[obj[sortedStr]].push(item);
        }else{
            obj[sortedStr] = result.length;
            result.push([item]);
        }
    });
    return result
};