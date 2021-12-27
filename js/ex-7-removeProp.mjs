import { format } from "date-fns";

import * as R from "ramda";

import obj from "./data.mjs";

/* Scrivere un metodo che riceve in input un oggetto e ritorna lo stesso senza la proprietà 
con la  chiave 'country'

myFunction({ continent: 'Asia', country: 'Japan', region: 'Kansai' })
Expected { continent: 'Asia', region: 'Kansai' }*/



function filterObjByKey(myObj) {
    if (R.is(Object, myObj)) {
        const remove = R.omit(["country"], myObj);
        return remove;
    } else {
        console.log('Questo non è un oggetto!!!')
    }
}
const omitted = filterObjByKey(obj);
console.log(omitted);
