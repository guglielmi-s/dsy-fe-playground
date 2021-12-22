import { format, addDays } from "date-fns";

import * as R from "ramda";


/* 
creare funzione che riceve due numeri come argomenti (num, length) e ritorna un array di multipli di num fino a che la lunghezza dell'array è uguale a length.

arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
 */


const arrayOfMultiples = (a, b) => {
  const multiples = Array(b).fill().map((elem, i) => (i+1) * a)
  return multiples
}
console.log(arrayOfMultiples(7, 5))
console.log(arrayOfMultiples(8,3))
console.table(arrayOfMultiples(6,6))
 




/* prova ad usare .map per ciclare l array usando l indice per capire quando fermarti. map(element, index)
 */

