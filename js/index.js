import { getDaysInMonth } from "date-fns";
import * as R from "ramda";





/*

Creare un metodo che riceve un valore iniziate, uno finale e un range.
Ritorna un array di valori partendo dal valore iniziale fino a quello finale aggiungendo il range:

*/

console.log("Creare un metodo che riceve un valore iniziate, uno finale e un range Ritorna un array di valori partendo dal valore iniziale fino a quello finale aggiungendo il range:")

function rangeStep(start, range, stop) {
    var arr = []
    for (let i = start; i <= stop; i += range) {
        arr.push(i)
    }
    console.log(arr)
}
rangeStep(2, 2, 8)

/*

creare un metodo che riceve in input due valori: month, year e ritorna il numero dei giorni di quel mese


*/

console.log("creare un metodo che riceve in input due valori: month, year e ritorna il numero dei giorni di quel mese")

function getDaysList(month, year) {

    if (R.is(Number, year) || R.is(Number, month)) {
        console.log("Scrivi il mese o l'anno in cifre, ad es: Gennaio = 1")
    }

    const result = getDaysInMonth(new Date(year, month + 1))
    console.log(result)
}
getDaysList(1, 2000)


/*
filtrare questo array per il valore crescente del valore del campo age usando sortWith
*/
console.log('*-------------filtrare questo array per il valore crescente del valore del campo age usando sortWith--------------------*')
console.log('                            ')


const people = [{
    name: 'Bobo',
    age: 82
  }, {
    name: 'Cam',
    age: 25
  }, {
    name: 'Al',
    age: 29
  }, {
    name: 'Alice',
    age: 10
  }, {
    name: 'Glamda',
    age: 69
  }, {
    name: 'Asanal',
    age: 77
  }]

function sortByAge(arr) {
    const ageNameSort = R.sortWith([R.ascend(R.prop('age'))]);
    return ageNameSort(arr)

}
const newArray = sortByAge(people);
console.log(newArray)

/* function sortByAge() {
    let ages = []
    people.forEach( p => {
        console.log(p)
        ages.push(p.age)
    })
    ages.sort()
    console.log(ages)
}
sortByAge()
 */


console.log('*-------------8=D--------------------*')
console.log('*-------------                             ')
console.log('*-------------                           ')
console.log('*-------------                             ')
console.log('*-------------                             ')
console.log('*-------------                             ')
console.log('*-------------                             ')
console.log('*-------------                             ')
console.log('*-------------                             ')
console.log('*-------------                             ')
console.log('*-------------                             ')

