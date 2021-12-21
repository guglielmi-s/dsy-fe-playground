import { format, addDays } from "date-fns";

import * as R from "ramda";


/* 
creare funzione che riceve due numeri come argomenti (num, length) e ritorna un array di multipli di num fino a che la lunghezza dell'array è uguale a length.

arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
 */

/* const arrayOfMultiples = (a, b) => {
  var multiples = [];
  for (let i = 1; i <= b; i++) {
    multiples.push(a * i)
  }
  console.table({ multiples })
}
arrayOfMultiples(9, 10) */


function arrOfMulty (start, end) {
  const myArr = Array(end).fill().map((elem, i) => (i+1) * start);
  return myArr
}

console.log(arrOfMulty(7, 5))
console.log(arrOfMulty(8,3))
console.table(arrOfMulty(6,6))
