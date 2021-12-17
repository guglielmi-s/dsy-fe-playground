import { format } from "date-fns";

import * as R from "ramda";

/* Scrivere un metodo che riceve in input un oggetto e ritorna lo stesso senza la proprietà 
con la  chiave 'country'

myFunction({ continent: 'Asia', country: 'Japan', region: 'Kansai' })
Expected { continent: 'Asia', region: 'Kansai' }*/

const obj = { continent: 'Asia', country: 'Japan', region: 'Kansai' }

function removeKey(myObj){
   const remove= R.omit(['country'], myObj)
   return remove
}
const omitted = removeKey(obj);
console.log(omitted)

