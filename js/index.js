import { format, getDaysInMonth, getMonth, getYear } from "date-fns";
import * as R from "ramda";



// exercise getDaysList //
/* creare un metodo che riceve in input due valori: 
month, year e ritorna il numero dei giorni di quel mese */

/* var date = new Date();
var month = getMonth(date);
var year = getYear(date);

console.log('mese =' + month + ' ' + 'anno = ' + year) */

function getDaysList (month, year){
   var result = getDaysInMonth(new Date(year, month))
   return result
}

console.log(getDaysList(8, 2016))

