console.log(countries);
// alert("Open the browser console whenever you work on JavaScript");
// alert("Open the console and check if the countries has been loaded");

// Level 1
const emptyArray = [];
const nums = [1, 2, 3, 4, 5];
console.log(nums.liength);
console.log(
  `First item=${nums[0]}, Middle item=${
    nums[Math.floor(nums.length / 2)]
  }, Last item=${nums[nums.length - 1]}`
);

const mixedDataTypes = ["JavaScript", null, undefined, false, 3.14];

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(
  `First company=${itCompanies[0]}, Mddle company=${
    itCompanies[Math.floor(itCompanies.length / 2)]
  }, Last company=${itCompanies[itCompanies.length - 1]} `
);

for (let i = 0; i < itCompanies.length; i++) {
  const company = itCompanies[i];
  console.log(company.toUpperCase());
}

console.log(
  itCompanies.slice(0, itCompanies.length - 1).join(",") +
    ` and ${itCompanies[itCompanies - 1]} are big IT companies.`
);

let company = "Tencent";
if (itCompanies.includes(company))
  console.log(`${company} exists in itCompanies.`);
else console.log(`${company} doesn't exist in itCompanies.`);

itCompanies.sort();
console.log(itCompanies);

// Remove first IT company
itCompanies.shift();
console.log(itCompanies);

// Remove middle IT company
itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
console.log(itCompanies);

// Remove Last IT company.
itCompanies.pop();
console.log(itCompanies);

// Remove all IT companies.
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

// Level 2
console.log(countries);
console.log(webTechs);
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let words = text.replaceAll(/[^\w\s]/g, "").split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);
shoppingCart.unshift("Meat");
console.log(shoppingCart);

if (!shoppingCart.includes("Sugar")) shoppingCart.push("Sugar");
console.log(shoppingCart);

const isAllergic = true;
let index = shoppingCart.indexOf("Honey");
if (isAllergic) shoppingCart.splice(index, 1);
console.log(shoppingCart);

index = shoppingCart.indexOf("Tea");
shoppingCart[index] = "Green Tea";
console.log(shoppingCart);

if (countries.includes("Ethiopia")) console.log("ETHIOPIA");
else countries.push("Ethiopia");
console.log(countries);

if (webTechs.includes("Sass")) console.log("Sass is a CSS preprocess.");
else webTechs.push("Sass");

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
console.log(`min age=${ages[0]}, max age=${ages[ages.length - 1]}`);

if (ages.length % 2 != 0)
  console.log(`middle age=${ages[Math.floor(ages.length / 2)]}`);
else
  console.log(
    `middle age=${
      (ages[Math.floor(ages.length / 2)] +
        ages[Math.floor(ages.length / 2) + 1]) /
      2
    }`
  );

let sum = 0;
for (const age of ages) {
  sum += age;
}
console.log(`average age=${sum / ages.length}`);
console.log(`range of the ages=${ages[ages.length - 1] - ages[0]}`);

