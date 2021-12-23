import * as R from "ramda";
import { companies } from "./companies.mjs";

/* Exercise 1: stampa il nome di ogni compagnia usando il forEach */
/* console.log(companies) */


console.log('---Javascript---')
companies.forEach(company => console.log(company.name)); 




console.log('---Ramda---')
const printName = x => console.log(x.name)
const onlyName = R.forEach(printName, companies);
