import * as R from "ramda";
import { companies } from "./companies.mjs";

/* Exercise 3: prendi solo le compagnie che hanno la categoria Retail */

const printRetail = companies.forEach(company => {
    if (company.category === 'Retail') {
        console.log(company.name)
    }
})

console.log('---RAMDA---')

/* const filtByCategory = elem => {
    if (elem.category === 'Retail') {
        return elem.name 
    }
} */

const filtByCategory = R.propEq('category', 'Retail')
const onlyCategory = R.filter(filtByCategory, companies)
console.log(onlyCategory) 