import { format } from "date-fns";
import it from "date-fns/locale/it/index.js";

function getDays(data) {
    const dateToday = format(data, 'MM/dd/yyyy')
    console.log(dateToday)
    const myDay = format(data, 'EEEE', { locale: it })
    return myDay
}

console.log(getDays(new Date('08/01/1993')));

