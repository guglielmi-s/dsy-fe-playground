import { format } from "date-fns";
import * as R from "ramda";



/*
 Scrivi una funzione che riceve due valori: una data (12/25/2021) e un numero intero, somma quel valore come giorni alla data.
  */
 function sumDay(data, v){
    var myData = format(new Date(data), 'MM/dd/yyyy')
    console.log(myData)
     var result = addDays(myData, v)
    console.log(result)
}
sumDay('08/01/1993', 20)