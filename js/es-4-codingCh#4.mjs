import { format, addDays } from "date-fns";

import * as R from "ramda";



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
/* 
function tipCalculator(bill) {
  let tip
  (bill >= 50 && bill <= 300) ? tip = (bill * 15) / 100 : tip = (bill * 20) / 100;
  console.log(`The bill was ${bill}€, the tip was ${tip}€ and the total value ${tip + bill}€`)

}
tipCalculator(321) */

//Coding Challenge #4.2

/* 
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 

😉 Bonus:
4. Bonus:Writeafunction'calcAverage'which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
4.1. First, you will need to add up all values in the array. 
To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. 
In each iteration, add the current value to the 'sum' variable. 
This way, by the end of the loop, you have all values added together
4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 😀

 */

//1. Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

//2. Create empty arrays for the tips and the totals ('tips' and 'totals')


//3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

const totals = []
const calcTip = tip => (tip >= 50 && tip <= 300) ? tip * 0.15 : tip * 0.20

const tips = R.map(calcTip, bills);

const calcTot = (bill, tip) => {
  for (let i = 0; i < bills.length; i++) {
    var tot = tip[i] + bill[i]
    totals.push(tot)
  }
  console.table({ totals })
}
calcTot(bills, tips)






