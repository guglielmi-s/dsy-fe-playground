import * as R from "ramda";
import { companies } from "./companies.mjs";

/* Exercise 4: ordina le compagnie partendo da quelle più vecchie */

const sortByStart = R.sortBy(R.prop("start"))
console.log(sortByStart(companies))

console.log("------------JS-----------")

const byStart = companies.slice(0);
byStart.sort((a,b) => a.start - b.start)
console.table(byStart)