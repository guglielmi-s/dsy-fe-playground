import { format , addDays, parseISO } from "date-fns";

import * as R from "ramda";



/*
 Scrivi una funzione che riceve due valori: 
 una data (12/25/2021) e un numero intero, 
 somma quel valore come giorni alla data.
  */

function aggGio (data, num){
    let mydate = new Date()
    mydate = data
    const calc = addDays(data, num)

    const formatDate = (data) => {
    let x = format(data, 'MM/dd/yyyy');
    return x}

    return formatDate(calc)
}
console.log(aggGio(new Date(), 40))