import * as R from "ramda";

/* Creare una funzione (n, lower, upper) 
che valida se un numero n è all interno di 
un range definito da lower e upper .

intInArray(3, 1, 9) ➞ true

intInArray(6, 1, 6) ➞ false */

console.log('----JavaScript-----')

const validateInt = (n, lower, upper) => { 
    if (n>lower && n<upper && R.is(Number, n)) {
        return true
    } else {
        return false
    }
}
//come utilizzo l'operatore ternario in questa circostanza?

console.log(validateInt(8, 1, 5));
console.log(validateInt(4, 2, 6));

console.log('----------RAMDA-----------')

const valIntRam = (n, lower, upper) => {
   const result =  R.and(n>lower && n<upper, R.is(Number, n) && R.is(Number, lower) && R.is(Number, upper))
   return result
}

console.log(valIntRam(3,4,6))
console.log(valIntRam(2,1,8))
console.log(valIntRam(2,1,3))
console.log(valIntRam('2','0','3'))

