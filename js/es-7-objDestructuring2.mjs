// const obj =  { two : 2 }

// var { one, two } = obj

// console.log(one) // outputs undefined

// Usa il destructuring per assegnare il valore 1 di default a one 
const obj = { two: 2 }
var { one = 1, two } = obj
console.log(one) // outputs 1 ✌️ 