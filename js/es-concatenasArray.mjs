import { format, addDays } from "date-fns";

import * as R from "ramda";
import { arr1, arr2, arr3, arr4, arr5 } from "./arrList.mjs";

/* 
Creare una funzione che concatena n array (dove n è variabile)

concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7] 

*/
const concat = ( m, o) => {
    const r = R.concat( m, o)
    console.table(r)
}
concat(arr1, arr2, arr5)