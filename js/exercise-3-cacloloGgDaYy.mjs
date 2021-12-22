import { format, getDaysInYear } from "date-fns";
import * as R from "ramda";

/*
Creare un metodo che riceve un valore intero che rappresenta gli anni e torna il valore in giorni

esempi:
calcAge(65) ➞ 23725
calcAge(20) ➞ 7300
*/

function getDaysFromYear(n) {
    const result = (getDaysInYear(new Date()) * n)
    return result
}
const p = getDaysFromYear(20);
console.log(p)