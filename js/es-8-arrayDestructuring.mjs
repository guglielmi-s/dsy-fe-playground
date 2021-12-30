// partendo da questo array
// const numbers = [1, 2, 3, 4]

// usando il destructuring valorizzare una nuova variabile con questo valore: [2,3,4]

const numbers = [1, 2, 3, 4]
let newNumber = [];
const [, b, c, d] = numbers
newNumber = [b, c, d];
console.log(newNumber);
