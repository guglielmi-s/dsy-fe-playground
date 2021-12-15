import { format, getDaysInMonth, getMonth, getYear } from "date-fns";
import * as R from "ramda";



// exercise getDaysList //
/* creare un metodo che riceve in input due valori: 
month, year e ritorna il numero dei giorni di quel mese */

/* var date = new Date();
var month = getMonth(date);
var year = getYear(date);

console.log('mese =' + month + ' ' + 'anno = ' + year) */

function getDaysList(month, year) {

    /*if ((R.is(String, year) || R.is(String, month)) && (month < 1 || month > 12)&& */

    if (year < 1492) {
        console.log("Scrivi il mese o l'anno in cifre, ad es: Gennaio = 1");
    } else {

        var result = (0, _dateFns.getDaysInMonth)(new Date(year, month + 1));
        return result;
    }
}
console.log(getDaysList(1, 1235));

