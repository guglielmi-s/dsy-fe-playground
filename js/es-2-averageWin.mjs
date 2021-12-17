import { format } from "date-fns";

import * as R from "ramda";

/* Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:
1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
2. Usethefunctiontocalculatetheaverageforbothteams
3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam

as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, 
together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"

4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
5. Ignoredrawsthistime

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉 GOOD LUCK 😀 */

//----Test Data 1-----
console.log("-------data 1--------");

let dolScore = [44, 23, 71];
let koaScore = [65, 54, 49];

function calcAverage(arr) {
  const result = R.sum(arr) / 3;
  return result;
}

let avgDolphins = calcAverage(dolScore);
/* console.log(avgDolphins) */
let avgKoalas = calcAverage(koaScore);
/* console.log(avgKoalas) */

function checkWinner(score1, score2) {
  const winner =
    score1 > score2
      ? console.log("Dolphins wins " + score1 + " vs " + score2)
      : console.log("Koalas wins " + score2 + " vs " + score1);
  return winner;
}

checkWinner(avgDolphins, avgKoalas);

console.log(" ");
console.log("--------data 2--------");

// ------- test Data 2

dolScore = [85, 54, 41];
koaScore = [23, 34, 27];

avgDolphins = calcAverage(dolScore);
avgKoalas = calcAverage(koaScore);

checkWinner(avgDolphins, avgKoalas);
