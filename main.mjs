import db from "./db.js";
const app = document.getElementById("app");
const start = document.getElementById("startBtn");
const startDay = document.getElementById("startDay");
const endDay = document.getElementById("endDay");
const main = document.getElementById("main");
const content = document.getElementById("content");
const grading = document.getElementById("grading");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");
console.log(startBtn);
console.log((startDay[0].innerText) * 1);
console.log(startDay[0].innerText);
console.log(typeof ((startDay[0].innerText) * 1));
let selected = false;
let result = {};
let newDB = [];
let retestDB = [];
let reretestDB = [];
let i = 0;
let j = 0;
let k = 0;

function gatherDB(a) {
  let arr = [];
  for (let i = a.startDay; i <= a.endDay; i++) {
    arr.push(db["day" + i]);
  }
  arr = arr.flat(2);
  // console.log(arr);
  return arr;
}
start.addEventListener("click", e => {
  result.startDay = startDay.options[startDay.selectedIndex].value;
  result.endDay = endDay.options[endDay.selectedIndex].value;
  console.log(result);
  newDB = gatherDB(result);
  selected = true;
  console.log(newDB);
});

console.log(db);
content.addEventListener("click", e => {
  if (selected && i < newDB.length) {
    console.log("i:",i,", ","newDB[",i,"]:",newDB[i]);
    content.innerText = newDB[i];
    i++;
    console.log("i++후 i값은:",i)
  }
  if (i === newDB.length && j < retestDB.length) {
    content.innerText = retestDB[j];
    j++;
  }
  if(j === retestDB.length && k < reretestDB.length) {
    content.innerText = reretestDB[k];
    k++;
  }
  content.style.backgroundColor = "white";
})

correct.addEventListener("click", e => {
  content.style.backgroundColor = "green";
})

wrong.addEventListener("click", e => {
  content.style.backgroundColor = "red";
  if(i <= newDB.length) retestDB.push(content.innerText);
  console.log(retestDB);
  if(i > newDB.length && j < retestDB.length) reretestDB.push(content.innerText);
  console.log(reretestDB);
})

