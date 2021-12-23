import * as R from "ramda";
import { companies } from "./companies.mjs";

/* Exercise 3: prendi solo le compagnie che hanno la categoria Retail */

const printRetail = companies.forEach(company => {
    if (company.category === 'Retail') {
        console.log(company.name)
    }
})

console.log('---RAMDA---')

const printRetails = elem => {
    if (elem.category === 'Retail') {
        console.log(elem.name)
        //return elem.name -> restituisce tutto l'array. perchè?
    }
}

const onlyRetail = R.forEach(printRetails, companies)
//console.log(onlyRetail) 