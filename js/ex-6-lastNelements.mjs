import { format } from "date-fns";

import * as R from "ramda";

/* Creare una funzione che prenda un array di valori 
e un numero x in input
e torni gli ultimi x elementi.
se l array ha meno elementi del valori di x, ritorna null

myFunction([1, 2, 3, 4, 5], 2)
Expected [ 4, 5 ] */

const numbers = [1,2,3,4,5,6,7,8,9,10]

function lastElem(arr, num){

    if(arr.length < num) {
        return null
    }
    
    const calc = R.slice(num, Infinity , arr);

    return calc
    
}

console.log(lastElem(numbers, 7))

console.log('-------------variante con arr.length----------------')

function lastElemLength(arr, num){

    if(arr.length < num) {
        return null
    }
    
    const oper = R.slice(num, arr.length , arr);

    return oper
    
}

console.log(lastElemLength(numbers, 8))