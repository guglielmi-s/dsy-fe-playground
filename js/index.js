import * as R from "ramda";

/*creare un metoto che restituisce un nuovo array con gli elementi che hanno 
la chiave uguale a false*/

const notesList = [
  {
    title: "Buy milk and bread",
    createdAt: "2020-04-04",
    dueDate: null,
    archived: false,
  },
  {
    title: "Pick up a package at the post office",
    createdAt: "2020-04-04",
    dueDate: null,
    archived: false,
  },
  {
    title: "Take a walk with Yoda",
    createdAt: "2020-04-04",
    dueDate: null,
    archived: true,
  },
  {
    title: "Read 15 minutes",
    createdAt: "2020-03-07",
    dueDate: "2020-03-08",
    archived: false,
  },
  {
    title: "Do 30 minutes workout",
    createdAt: "2020-03-01",
    dueDate: "2020-03-04",
    archived: false,
  },
];

const isFalse = R.propEq('archived', false)

const notesFalse = R.filter(isFalse, notesList)

console.log(notesFalse);