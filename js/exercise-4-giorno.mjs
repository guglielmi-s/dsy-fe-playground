import { format, getDay, toDate } from "date-fns";
import * as R from "ramda";


/* Creare un metodo che riceve una data nel formato (MM/DD/YYYY) 
e ritorna il giorno della settimana.
esempio:
getDay("12/07/2016") ➞ "Wednesday" */



/* format(new Date(), 'EEEE') => restituisce giorno in lettere */

/* format(new Date(2014, 1, 11), 'MM/dd/yyyy') => cambia formato orario*/

/* const dayLetter = format(new Date(), 'EEEE');
console.log(dayLetter)
const dateMDY = format(new Date(), 'MM/dd/yyyy');
console.log(dateMDY) */

function getDays(data){
    const dateToday = format(data, 'MM/dd/yyyy')
    console.log(dateToday)
    const myDay = format(data, 'EEEE')
    return myDay
}

console.log(getDays(new Date('08/01/1993')));

