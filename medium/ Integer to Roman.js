/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    if(num >3999 || num<1){
        return '';
    }
    var dictionary = [
        ['I','II','III','IV','V','VI','VII','VIII','IX'],
        ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
        ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
        ['M','MM','MMM'],
    ];
    var strNum = String(num),strLen = strNum.length;
    var result = '';
    
    for(var i=0;i<strLen;i++){
        var curNum;
        if(strNum[i] != '0'){
            curNum = Number(strNum[i]);
            result += dictionary[strLen-1-i][curNum-1];
        }
       
    }
    return result;
    
};