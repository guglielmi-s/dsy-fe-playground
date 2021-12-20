import { format , addDays } from "date-fns";

import * as R from "ramda";



/*
 Scrivi una funzione che riceve due valori: 
 una data (12/25/2021) e un numero intero, 
 somma quel valore come giorni alla data.
  */

function addToDate (date, num){
  if(R.is(Number, num) && (num > 0) && (num === parseInt(num,10))){
    let mydate = new Date(date);
    const result = addDays(mydate, num);
    const formatResult = formatDateMDY(result);
    return formatResult
    } else {
    console.log('Inserisci un numero intero e maggiore di 0')
  }

}

const formatDateMDY = (date) => {
  let formatDate = format(date, 'MM/dd/yyyy');

  return formatDate
  }

console.log(addToDate(new Date(), 7));