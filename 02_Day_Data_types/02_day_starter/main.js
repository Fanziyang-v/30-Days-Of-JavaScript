// this is your main.js script

// Level 1
let challenge = "30 Days Of JavaScript";
console.log(challenge.length); // 21
console.log(challenge.toUpperCase()); // 30 DAYS OF JAVASCRIPT
console.log(challenge.toLowerCase()); // 30 days of javascript
console.log(challenge.substring(0, 2)); // 30
console.log(challenge.substring(3)); // Days Of JavaScript
console.log(challenge.includes("Script")); // true

console.log(challenge.split()); // ['30 Days Of JavaScript']

console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(",")
);

console.log(challenge.replace("JavaScript", "Python")); // 30 Days Of Python

console.log(challenge.charAt(15)); // 'S'
console.log(challenge.charCodeAt(11)); // 74

console.log(challenge.indexOf("a")); // 4
console.log(challenge.lastIndexOf("a")); // 14

let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because")); // 31
console.log(sentence.lastIndexOf("because")); // 47

console.log(sentence.search(/because/)); // 31

let str = "    Hello, World!     ";
console.log(str);
console.log(str.trim());

console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("Script"));

console.log("30 Days of" + " " + "JavaScript");
console.log("30 Days of".concat(" ", "JavaScript"));
console.log(challenge.repeat(2));

// Level 2
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

console.log(typeof +"10" == typeof 10); // true
console.log(Math.round(parseFloat("9.8")) == 10); // true
console.log("python".includes("on") && "jargon".includes("on")); // true
console.log("I hope this course is not full of jargon".includes("jargon")); // true

console.log(Math.round(Math.random() * 100)); // [0, 100]
console.log(Math.round(50 + Math.random() * 50)); // [50, 100]
console.log(Math.round(Math.random() * 255)); // [0, 255]

let lang = "JavaScript";
let randomIndex = Math.floor(Math.random() * lang.length);
console.log(lang[randomIndex]);

console.log(
  "1\t1\t1\t1\t1\n\
2\t1\t2\t4\t8\
\n3\t1\t3\t9\t27\n\
4\t1\t4\t16\t64\n\
5\t1\t5\t25\t125\n"
);

let start = sentence.indexOf("because");
let end = sentence.lastIndexOf("because") + 7;
console.log(sentence.substring(start, end));

// Level 3
console.log(
  "Love is the best thing in this world. Some found their love and some are still looking for their love.".match(
    /love/gi
  )
);
const newSentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching".replace(
    /[%&@$#;]/g,
    ""
  );

console.log(newSentence);

const statement =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

const nums = statement.match(/\d+/g);
let salary =
  parseInt(nums[0]) * 12 + parseInt(nums[1]) + parseInt(nums[2]) * 12;
console.log(salary);
