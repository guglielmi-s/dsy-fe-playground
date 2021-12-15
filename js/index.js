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


console.log("************************ Crea una funzione che calcoli il prezzo totale partendo da questo carrello di dati ****************************************")



const cart = [{
    name: 'apples',
    price: 2.49
}, {
    name: 'soap',
    price: 1.99
}, {
    name: 'milk',
    price: 2.99
}, {
    name: 'eggs',
    price: 3.99
}, {
    name: 'carrots',
    price: 2.99
}, {
    name: 'butter',
    price: 1.49
}, {
    name: 'fish',
    price: 9
}, {
    name: 'lettuce',
    price: 2.99
}, {
    name: 'broccoli',
    price: 4.99
}, {
    name: 'lemons',
    price: 3.49
}]

function getTotalPrice(arr) {
    var price = [];
    const pushing = p => price.push(p.price)
    R.map(pushing, arr)
    const risultato = parseFloat(R.sum(price)).toFixed(2)
    console.table(price)
    return risultato + " €"
}
const prova = getTotalPrice(cart)
console.log(prova)

console.log('*****************************************')