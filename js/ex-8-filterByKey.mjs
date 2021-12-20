import * as R from "ramda";
import obj from "./data.mjs";

/* Creare un metodo che riceve un oggetto con due proprietà 
come argomento e deve ritornare il valore della proprietà 'prop-2'

myFunction({  one: 1,  'prop-2': 2})
Expected 2 */

function getValueByKey (obj){
    const result = R.prop("b", obj);
    return result
}

console.log(getValueByKey(obj))