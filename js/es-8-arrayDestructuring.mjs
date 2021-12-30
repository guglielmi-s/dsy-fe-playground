// partendo da questo array
// const numbers = [1, 2, 3, 4]

// usando il destructuring valorizzare una nuova variabile con questo valore: [2,3,4]

const numbers = [1, 2, 3, 4]
const [ ,...b] = numbers
console.log(b);
