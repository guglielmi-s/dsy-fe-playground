"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _dateFns = require("date-fns");

var R = _interopRequireWildcard(require("ramda"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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