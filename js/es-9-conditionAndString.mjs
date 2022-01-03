// Scrivete una funzione che riceve una stringa name e un numero num (può essere 0 o 1) e ritorna la strina "Hello" + name se num è 1 altrimenti "Bye" + name

// sayHelloBye("alon", 1) ➞ "Hello Alon"

// const sayHello = (name, num) => {
//     num === 1 && console.log(`Hello ${name[0].toUpperCase()}${name.slice(1)}`);
//     num === 0 && console.log(`Bye ${name[0].toUpperCase()}${name.slice(1)}`);
//     // c'è sicuramente un altro modo per non ricopiare tutto il codice 
    
// }
// sayHello('adolfo', 1)

const toUpper = (str) =>{
    return `${str[0].toUpperCase()}${str.slice(1)}`
}
const sayHello =(name, num) =>{
    return  num === 0 ?  `Bye ${toUpper(name)}` : `Hello ${toUpper(name)}`
}
console.log(sayHello('adolfo',1));
console.log(sayHello('giggio', 0));


