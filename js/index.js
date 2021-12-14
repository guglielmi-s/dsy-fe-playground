import { format, isBefore } from "date-fns";
import * as R from "ramda";

console.log(format(new Date(), "'Today is a' eeee"));

console.log(R.isNil([]));

function dateBefore(date){
    var dateToCompare = new Date(1993, 8, 1);
    return isBefore(date, dateToCompare);
}

var myDate = new Date(2001, 7, 12);

console.log(dateBefore(myDate));