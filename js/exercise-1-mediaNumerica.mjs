import { format } from "date-fns";
import * as R from "ramda";

/*
Creare una funzione che riceve in input un array di numeri e ritorna la media numerica
*/

const numeri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];


function mediaNumerica(arr){
    const calc = (R.sum(arr))/(arr.length)
    return calc 
}
const media = mediaNumerica(numeri)
console.log(media)
