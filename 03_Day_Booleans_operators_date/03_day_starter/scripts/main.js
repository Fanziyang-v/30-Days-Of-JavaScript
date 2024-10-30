// this is your main.js script

// Level 1.
console.log("Level 1");
let firstName = "Ziyang";
let lastName = "Fan";
let country = "China";
let city = "Shenzhen";
let age = 23;
let isMarried = false;
let year = 2024;
console.log(firstName, lastName, country, city);
console.log(age, isMarried, year);

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

console.log(typeof "10" == typeof 10); // false
console.log(parseInt("9.8") == 10); // false

// truthy statements
console.log(4 > 3);
console.log("10" == 10);
console.log(0 == true);

// falsy statements
console.log(2 > 3);
console.log("10" === 10);
console.log("hello".length < 3);

console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 == "4"); // true
console.log(4 === "4"); // false
console.log("python".length != "jargon".length);

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); // true
console.log(!("dargon".includes("on") || "python".includes("on")));

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(Date.now()); // number of seconds elapsed from January 1, 1970.

// Level 2
console.log("Level 2:");
let base = parseInt(prompt("Enter base: "));
let height = parseInt(prompt("Enter height: "));
console.log(`The area of the triangle is ${0.5 * base * height}`);

let a = parseInt(prompt("Enter side a: "));
let b = parseInt(prompt("Enter side b: "));
let c = parseInt(prompt("Enter side c: "));
console.log(`The perimeter of the triangle is ${a + b + c}`);

let length = parseInt(prompt("Enter length: "));
let width = parseInt(prompt("Enter width: "));
console.log(`The perimeter of the rectangle is ${2 * (length + width)}`);

const PI = 3.14;
let radius = parseFloat(prompt("Enter radius: "));
console.log(`The area of the circle is ${PI * radius * radius}`);
console.log(`The circumference of the circle is ${2 * PI * radius}`);

let x1 = 2,
  y1 = 2;
let x2 = 6,
  y2 = 10;
console.log(`The slope is ${(y2 - y1) / (x2 - x1)}`);

let hours = parseInt(prompt("Enter hours: "));
let rate = parseInt(prompt("Enter rate per hour: "));
console.log(`Your weekly earning is ${hours * rate}`);

let fullName = "ZiyangFan";
if (fullName.length > 7) console.log("Your name is long");
else console.log("Your name is too short.");

if (firstName.length > lastName.length)
  console.log(
    `Your first name, ${firstName} is longer than your family name, ${lastName}`
  );
else
  console.log(
    `Your first name, ${firstName} is shorter than your family name, ${lastName}`
  );

let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} older than you.`);

let birthYear = parseInt(prompt("Enter birth year: "));
age = now.getFullYear() - birthYear;

console.log(
  `You are ${age}`,
  age >= 18
    ? "You are old enough to drive"
    : `You will be allowed to drive after ${18 - age} years.`
);

console.log(
  `${now.getFullYear()}-${now.getMonth()}-${now.getDay()} ${now.getHours()}:${now.getMinutes()}`
);
console.log(
  `${now.getDay()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
);
console.log(
  `${now.getDay()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
);

// Level 3
console.log("Level 3");
console.log(
  `${now.getFullYear()}-${String(now.getMonth()).padStart(2, "0")}-${String(
    now.getDay()
  ).padStart(2, "0")} ${now.getHours()}:${String(now.getMinutes()).padStart(
    2,
    "0"
  )}`
);
