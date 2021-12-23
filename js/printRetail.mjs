import * as R from "ramda";
import { companies } from "./companies.mjs";

/* Exercise 3: prendi solo le compagnie che hanno la categoria Retail */

 const printRetail = companies.forEach(company => {
    if(company.category === 'Retail'){
        console.log(company.name)
    }
}) 

console.log('---RAMDA---')

const printRetails = elem => {
    if(company.category === 'Retail')
    {
    console.log(elem.name)}}

const onlyRetail = R.forEach(printRetails, companies)