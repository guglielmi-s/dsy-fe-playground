import { format, addDays } from "date-fns";

import * as R from "ramda";



/*
 Scrivi una funzione che riceve due valori: 
 una data (12/25/2021) e un numero intero, 
 somma quel valore come giorni alla data.
  */

function aggGio(data, num) {
  let mydate = new Date(data)
  const calc = addDays(mydate, num)
  const formatDate = (data) => {
    let x = format(data, 'MM/dd/yyyy');
    return x
  }
  return formatDate(calc)
}
console.log(aggGio('12/11/2021', 3))



// Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

1. Calculate the tip,depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

2. Print a string to the console containing the bill value, the tip,and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430 Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉
 */

function tipCalculator(bill) {
  let tip
  (bill >= 50 && bill <= 300) ? tip = (bill*15)/100 : tip = (bill*20)/100;
  console.log(`The bill was ${bill}€, the tip was ${tip}€ and the total value ${tip+bill}€`) 
  
}
tipCalculator(321)
