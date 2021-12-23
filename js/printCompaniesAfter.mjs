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

const printAfter = p => {
    if (p.start > 1987) {
      console.log(p.name)
    }
}
R.forEach(printAfter, companies)


