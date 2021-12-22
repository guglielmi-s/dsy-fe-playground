import { format } from "date-fns";

import * as R from "ramda";


/* 
scrivere un metodo che prende in input due array, 
fa il merge dei due rimuovendo i valori duplicati.

myFunction([1, 2, 3], [3, 4, 5])
Expected [ 1, 2, 3, 4, 5 ]

 */

//const array3 = [...new Set([...array1,...array2])]
//console.log(array3)

const num1 = [1,2,3];
const num2 = [3,4,5];

/* function mergeRemove(arr1,arr2){
 const arr3 = arr1.concat(arr2)
 const filteredArray = arr3.filter((ele , pos) =>{
    return arr3.indexOf(ele) == pos;
}) 
console.log(filteredArray)
}
(mergeRemove(num1,num2)) */
function mergeArrays(arr1, arr2) {
    if(R.is(Object, arr1) && R.is(Object, arr2) && !R.isEmpty(arr1) && !R.isEmpty(arr2)){
        const result = R.uniq(R.concat(arr1, arr2));
        return result
    } else {
        console.log('bau')
    }
    
}
const arrMerged = mergeArrays(num1,num2)
console.log(arrMerged)