import * as R from "ramda";
import { companies } from "./companies.mjs";

/* Exercise 5: fai un nuovo oggetto 
che ha solo le proprietà 
name e categoria della compagnia[2] (usa il destructuring) */

const [a,b,c,d,e,f,g,h,i] = companies;

const newObj = {
    name: c.name,
    category: c.category
}

console.log(newObj) 
