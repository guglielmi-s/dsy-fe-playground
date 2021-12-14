import { format } from "date-fns";
import * as R from "ramda";

console.log(format(new Date(), "'Today is a' eeee"));

console.log(R.isNil([]));
