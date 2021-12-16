import * as R from "ramda";


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
}];

/* function getTotalPrice(arr) {
    var price = [];
    const pushing = p => price.push(p.price)
    R.map(pushing, arr)
    const risultato = parseFloat(R.sum(price)).toFixed(2)
    console.table(price)
    return risultato + " €"
}
const prova = getTotalPrice(cart)
console.log(prova)

console.log('*****************************************') */


const prices = p => p.price 
const priceOnly = R.map(prices, cart)
const result = parseFloat(R.sum(priceOnly)).toFixed(2) + ' €';
console.log(priceOnly)
console.log('totale = '+ result)


