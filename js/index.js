import { format } from "date-fns";
import * as R from "ramda";

/* 
The characters wrapped between two single quotes characters 
(') are escaped. Two single quotes in a row, whether inside or outside 
a quoted sequence, represent a 'real' single quote. (see the last example) */

console.log(format(new Date(), "'Today is a' eeee"));

console.log(R.isNil([]));

