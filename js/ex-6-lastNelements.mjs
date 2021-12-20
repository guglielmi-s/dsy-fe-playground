import numbers from "./data.mjs"

import * as R from "ramda";

/* Creare una funzione che prenda un array di valori 
e un numero x in input
e torni gli ultimi x elementi.
se l array ha meno elementi del valori di x, ritorna null

myFunction([1, 2, 3, 4, 5], 2)
Expected [ 4, 5 ] */

function lastElem(arr, num){

    if(arr.length < num) {
        return null
    }
    
    const calc = R.slice(arr.length - num , arr.length, arr);

    return calc
    
}

console.log(lastElem(numbers, 8))

