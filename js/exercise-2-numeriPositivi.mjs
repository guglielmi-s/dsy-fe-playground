import { format } from "date-fns";
import * as R from "ramda";

/* creare un metodo che riceve un array di numeri 
e ritorna un array nuovo che contiene solo numeri positivi */


const numeri = [8, 27, -29, -2, 15, 23, 88, -60, -74];

function getPositive(arr){
    const numPos = n => n >= 0;
    return R.filter(numPos, arr)
}

console.log(getPositive(numeri))