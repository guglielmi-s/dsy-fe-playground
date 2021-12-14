"use strict";

var _dateFns = require("date-fns");

var _ramda = require("ramda");

var R = _interopRequireWildcard(_ramda);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* 
The characters wrapped between two single quotes characters 
(') are escaped. Two single quotes in a row, whether inside or outside 
a quoted sequence, represent a 'real' single quote. (see the last example) */

console.log((0, _dateFns.format)(new Date(), "'Today is a' eeee"));
console.log("prova");
console.log(R.isNil([]));

/*

reare un metodo che riceve un valore iniziate, uno finale e un range.
Ritorna un array di valori partendo dal valore iniziale fino a quello finale aggiungendo il range:

*/

function rangeStep(start, range, stop) {
    var arr = [];
    for (var i = start; i <= stop; i += range) {
        arr.push(i);
    }
    console.log(arr);
}
rangeStep(10, 2, 21);