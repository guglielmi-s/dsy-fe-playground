// Usa es6 destructuring per assegnare obj.one 
// alla variabile anotherOne.
// Invece la two deve rimanere assegnata a obj.two

const obj = { one: 1, two: 2 }
const { one: anotherOne, two } = obj
console.log(anotherOne, two);

