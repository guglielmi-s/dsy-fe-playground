import { format } from "date-fns";
import * as R from "ramda";

/* 
The characters wrapped between two single quotes characters 
(') are escaped. Two single quotes in a row, whether inside or outside 
a quoted sequence, represent a 'real' single quote. (see the last example) */

console.log(format(new Date(), "'Today is a' eeee"));
console.log("prova")
console.log(R.isNil([]));

/*

reare un metodo che riceve un valore iniziate, uno finale e un range.
Ritorna un array di valori partendo dal valore iniziale fino a quello finale aggiungendo il range:

*/

function rangeStep(start, range, stop) {
    var arr= []
    for(let i=start; i<=stop; i+=range) {
        arr.push(i)
    }
    console.log(arr)
}
rangeStep(10,2,21)



