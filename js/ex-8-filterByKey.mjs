import { format } from "date-fns";

import * as R from "ramda";

/* Creare un metodo che riceve un oggetto con due proprietà 
come argomento e deve ritornare il valore della proprietà 'prop-2'

myFunction({  one: 1,  'prop-2': 2})
Expected 2 */

const _obj = {a: 1,  b: 2, c: 3, d:4}

function filterKey (obj){
    const result = R.prop(['b'], obj);
    return result
}

console.log(filterKey(_obj))