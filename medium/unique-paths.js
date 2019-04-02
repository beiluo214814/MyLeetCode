/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    function combination(m,n){
        return factorial(m,n)/factorial(n,n);
    }
    
    function factorial(m,n){
        var num = 1;
        var count = 0;
        for(var i = m;i > 0;i--){
            if(count == n){
                break;
            }
            num = num * i;
            count++;
        }
        return num;
    }

   return combination(m+n-2,m-1)
};