/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
    if (tx < sx || ty < sy) 
       return false;
    if ((tx == sx && (ty - sy) % sx == 0) || (ty == sy && (tx - sx) % sy == 0)) 
        return true;
    return reachingPoints(sx, sy, tx % ty, ty % tx);
};