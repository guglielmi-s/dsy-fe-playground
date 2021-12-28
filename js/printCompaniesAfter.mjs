import * as R from "ramda";
import { companies } from "./companies.mjs";

/* Exercise 2: stampa il nome di ogni compagnia nata dopo il 1987 */
console.log('----------JS----------')
companies.forEach(company => {
    if (company.start > 1987) {
        console.log(company.name)
    }
})

console.log('----------GLAMDA----------')

const filtByYear = company => {
    if (R.gt(company.start, 1987)) {
      return company.name
    }
} 

console.log(R.filter(filtByYear, companies));
