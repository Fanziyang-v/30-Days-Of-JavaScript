// this is your main.js script

alert("Open the browser console whenever you work on JavaScript");

// Level 1
let age = parseInt(prompt("Enter your age: "));
if (age >= 18) alert("You are old enough to drive.");
else alert(`You are left with ${18 - age} to drive.`);

let myAge = 23;
let yourAge = parseInt(prompt("Enter your age: "));
if (myAge >= yourAge) alert(`I am ${myAge - yourAge} years older than you.`);
else alert(`You are ${yourAge - myAge} years older than me.`);

let a = 4,
  b = 3;
// Method 1
if (a > b) alert("a is greater than b");
else alert("a is less than b");
// Method 2
alert(a > b ? "a is greater than b" : "a is less than b");

let num = parseInt(prompt("Enter a number: "));
if (num % 2 == 0) alert(`${num} is even number.`);
else alert(`${num} is an odd number.`);

// Level 2
let grade = parseInt(prompt("Enter your grade: "));
if (80 <= grade && grade <= 100) alert("A");
else if (70 <= grade && grade < 80) alert("B");
else if (60 <= grade && grade < 70) alert("C");
else if (50 <= grade && grade < 60) alert("D");
else alert("F");

let month = prompt("Enter a month: ");
switch (month) {
  case "March":
  case "April":
  case "May":
    alert("Spring");
    break;
  case "June":
  case "July":
  case "August":
    alert("Summer");
    break;
  case "September":
  case "October":
  case "November":
    alert("Autumn");
  case "December":
  case "January":
  case "February":
    alert("Winter");
  default:
    alert(`${month} is not valid!`);
}

let day = prompt("What is the day today? ");
day = day[0].toUpperCase() + day.substring(1).toLowerCase();
switch (day) {
  case "Saturday":
  case "Sunday":
    alert(`${day} is weekend`);
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    alert(`${day} is working day.`);
  default:
    alert(`${day} is not valid!`);
}

// Level 3
month = prompt("Enter a month: ");
month = month[0].toUpperCase() + month.substring(1);
switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    alert(`${month} has 31 days.`);
    break;
  case "February":
    alert("February has 28 days.");
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    alert(`${month} has 30 days.`);
  default:
    alert(`${month} is not valid!`);
}
