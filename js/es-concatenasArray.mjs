import * as R from "ramda";
import arrList from "./arrList.mjs";
/* 
Creare una funzione che concatena n array (dove n è variabile)
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7] 
*/
const [a, b, c, d, e] = arrList;
const concatArr = (...n) => {
    let myarr = [];
    return myarr.concat(...n)
}
console.log(concatArr(d, e))