// console.log(countries);
// alert("Open the console and check if the countries has been loaded");

// Level 1
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

j = 10;
while (j >= 0) {
  console.log(j);
  j--;
}

// Print pyramid
for (let i = 0; i < 7; i++) {
  console.log("#".repeat(i + 1));
}

// Print i x i
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// Print i ixi ixixi
console.log("i\ti^2\ti^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}\t${i ** 2}\t${i ** 3}`);
}

// Print even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Print odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// Print prime numbers
for (let i = 2; i <= 100; i++) {
  let k = Math.sqrt(i);
  // TODO
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all nubmers from 0 to 100 is ${sum}`);

let oddSum = 0,
  evenSum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}
console.log(
  `The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}`
);

let arr = [evenSum, oddSum];
console.log(arr);

// generate 5 random integers
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 10));
}
console.log(randomNumbers);

// generate 5 UNIQUE random integers
randomNumbers = [];
while (randomNumbers.length < 5) {
  let num = Math.floor(Math.random() * 10);
  if (!randomNumbers.includes(num)) {
    randomNumbers.push(num);
  }
}
console.log(randomNumbers);

// generate six characters random id
let randomId = "";
let alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * alphabet.length);
  randomId += alphabet[randomIndex];
}
console.log(randomId);

// Level 2

// generate any number of characters random id
let randomLength = Math.floor(1 + Math.random() * 49);
randomId = "";
for (let i = 0; i < randomLength; i++) {
  let randomIndex = Math.floor(Math.random() * alphabet.length);
  randomId += alphabet[randomIndex];
}
console.log(randomId);

// generate random hexadecimal color
let hexadecimalNumbers = "0123456789abcdef";
let randomColor = "#";
for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * hexadecimalNumbers.length);
  randomColor += hexadecimalNumbers[randomIndex];
}
console.log(randomColor);

// generate random rgb color.
let rgb = [];
for (let i = 0; i < 3; i++) {
  let randomNum = Math.floor(Math.random() * 255);
  rgb.push(randomNum);
}
console.log(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);

let countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// to upper case.
const upper = [];
for (const country of countries) {
  upper.push(country.toUpperCase());
}
console.log(upper);

// length
const lengths = [];
for (const country of countries) {
  lengths.push(country.length);
}
console.log(lengths);

let combinations = [];
for (const country of countries) {
  combinations.push([
    country,
    country.slice(0, 3).toUpperCase(),
    country.length,
  ]);
}
console.log(combinations);

// filter country name
let filtered_countries = [];
for (const country of countries) {
  if (country.includes("land")) {
    filtered_countries.push(country);
  }
}
if (filtered_countries) {
  console.log(filtered_countries);
} else {
  console.log("These are countries ends without land");
}

filtered_countries = [];
for (const country of countries) {
  if (country.includes("ia")) {
    filtered_countries.push(country);
  }
}
if (filtered_countries) {
  console.log(filtered_countries);
} else {
  console.log("These are countries ends without ia");
}

// Find the country containing the biggest number of characters.
let maxlen = -1;
for (const len of lengths) {
  maxlen = Math.max(len, maxlen);
}
for (const country of countries) {
  if (country.length == maxlen) {
    console.log(country);
    break;
  }
}

// Find the country containing only 5 characters.
filtered_countries = [];
for (const country of countries) {
  if (country.length == 5) {
    filtered_countries.push(country);
  }
}
console.log(filtered_countries);

// Find the longest word in the webTechs array
let longestWord = "";
for (const tech of webTechs) {
  if (longestWord.length < tech.length) {
    longestWord = tech;
  }
}
console.log(longestWord);

combinations = [];
for (const tech of webTechs) {
  combinations.push([tech, tech.length]);
}
console.log(combinations);

let acronym = "";
for (const tech of mernStack) {
  acronym += tech[0];
}
console.log(acronym);

for (const tech of [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
]) {
  console.log(tech);
}

const fruits = ["banana", "orange", "mango", "lemon"];
console.log(fruits);
let lo = 0,
  hi = fruits.length - 1;

while (lo < hi) {
  let fruit = fruits[lo];
  fruits[lo] = fruits[hi];
  fruits[hi] = fruit;
  lo++;
  hi--;
}
console.log(fruits);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (const tech of fullStack) {
  console.log(tech);
}

// Level 3
countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const countiresCopy = [...countries];
console.log(countiresCopy);

webTechs.sort();
console.log(webTechs);
mernStack.sort();
console.log(mernStack);

filtered_countries = [];
for (const country of countries) {
  if (country.includes("land")) {
    filtered_countries.push(country);
  }
}
console.log(filtered_countries);

let longestsCountry = "";
for (const country of countries) {
  if (country.length > longestsCountry.length) {
    longestsCountry = country;
  }
}
console.log(longestsCountry);

filtered_countries = [];
for (const country of countires) {
  if (country.length == 4) {
    filtered_countries.push(country);
  }
}
console.log(filtered_countries);

filtered_countries = [];
for (const country of countries) {
  if (country.split(" ").length > 1) {
    filtered_countries.push(country);
  }
}

let upperCases = [];
for (const country of countries) {
  upperCases.push(country.toUpperCase());
}
console.log(upperCases);
