import { format, isBefore } from "date-fns";
import * as R from "ramda";

/* 
The characters wrapped between two single quotes characters 
(') are escaped. Two single quotes in a row, whether inside or outside 
a quoted sequence, represent a 'real' single quote. (see the last example) */

console.log(format(new Date(), "'Today is a' eeee"));
console.log("prova")
console.log(R.isNil([]));


/* Js Excercies: Total price #2 */

//Crea una funzione che calcoli il prezzo totale partendo da questo carrello di dati.



 
function rangeStep(start, range, stop) {
    var arr= []
    for(let i=start; i<=stop; i+=range) {
        arr.push(i)
    }
    console.log(arr)
}
rangeStep(10,2,21)



