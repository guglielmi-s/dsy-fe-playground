import { format } from "date-fns";
import * as R from "ramda";

console.log(format(new Date(), "'Today is a' eeee"));

console.log(R.isNil([]));

console.log('-------------Ramda: IsEven Exercise------------------------------')

/* partendo da un array di numeri:
- filtrare l'array mostrando solo i numeri pari
- creare un nuovo array con i valori moltiplicati per numero */


const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
