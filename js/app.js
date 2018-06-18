
// Strings

let firstVariable = "Hello World";
firstVariable = 5;

let secondVariable = firstVariable;
secondVariable = "This is a string";

// firastVariable => 5

let yourName = "Michael";

console.log("Hello my name is " + yourname);

// Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a + b === c);
console.log(e === 'Kevin');

// The Farm

let animal = "cow";

if(animal === "cow")
{
  console.log("MOOOOOO");
}
else {
  console.log("Hey! You're not a cow!");
}

// Driver's Ed

thisPersonsAge = 16;

if(thisPersonsAge >= 16)
{
  console.log("Here are the keys");
}
else {
  console.log("Sorry, you're too young");
}

// Just Loop It

for(let i = 0; i < 10; i++)
{
  console.log(i);
}

for(let i = 10; i < 4000; i++)
{
  console.log(i);
}

for(let i = 10; i < 4000; i += 2)
{
  console.log(i);
}

// Let's Get Even

for(let i = 0; i < 100; i++)
{
  if(i % 2 === 0)
  {
    console.log(`${i} is an even number`);
  }
}

// Give me Five

for(let i = 0; i < 100; i++)
{
  if(i % 5 === 0)
  {
    console.log(`I found a ${i}. High five!`);
  }
}

for(let i = 0; i < 100; i++)
{
  if(i % 3 === 0)
  {
    console.log(`I found a ${i}. Three is a crowd`);
  }
  if(i % 5 === 0)
  {
    console.log(`I found a ${i}. High five!`);
  }
}

// Savings Account

let bankAccount = 0;

for(let i = 0; i < 10; i++)
{
  bankAccount += i;
}

console.log(`My bank account contains $${bankAccount}.`);

bankAccount = 0;

for(let i = 0; i < 100; i++)
{
  bankAccount += i;
  bankAccount *= 2;
}

console.log(`My bank account contains $${bankAccount}.`);

// Multiples 3 of 5
let thisSum = 0;

for(let i = 0; i < 1000; i++)
{
  if((i % 3 === 0) || (i % 5 === 0))
  {
    thisSum += i;
  }
}

console.log(thisSum);

// Easy Does It


// We Got class

const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];

// ourClass[2];

ourClass[2] = "Octocat";

ourClass.push("Cloud City");

console.log(ourClass);

// Mix It Up

const myArray = [5, 10, 500, 20];

myArray.push("Egon");
myArray.pop();

myArray.unshift("Bob Marley");
myArray.shift();

myArray.reverse();

console.log(myArray);

// Monkey In the Middle

let littleNumber = 4;

if(littleNumber < 5)
{
  console.log(littleNumber);
}
else if(littleNumber > 10)
{
  console.log("big number");
}
else {
  console.log("monkey");
}

// What's in your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

kristynShoe = kristynsCloset.shift();

temp = kristynsCloset.pop();
kristynsCloset.push("raybans");
kristynsCloset.push("marshmallow peeps");

kristynsCloset[4] = "stained yellow hat";

console.log(thomsCloset[0][0]);
console.log(thomsCloset[1][0]);
console.log(thomsCloset[2][0]);

thomsCloset[1][2] = "Footie Pajamas";

// Functions

function printGreeting(name)
{
  console.log(`Hello there, ${name}!`);
}

// reverseWordOrder

function reverseWordOrder(thisString)
{
    let parsedString = thisString.split("");
    let thisNewString = [];

    console.log(parsedString);

    for(let i = 0; i < parsedString.length; i++)
    {
      thisNewString.push(parsedString[((parsedString.length - 1) - i)]);
    }

    return thisNewString.join("");
}

console.log(reverseWordOrder("this is my string"));

// Calculate

function calculate(num1, num2, operation)
{
  if(operation === "add")
  {
    return (num1 + num2);
  }
  else if(operation === "sub")
  {
    return (num1 - num2);
  }
  else if(operation === "mult")
  {
    return (num1 * num2);
  }
  else if(operation === "div")
  {
    return (num1 / num2);
  }
  else if(operation === "exp")
  {
    return Math.exp(num1, num2);
  }
}

for(let i = 0; i < myOperations.length; i++)
{
  console.log(calculate(45, 32, myOperations[i]));
}

function printCool(name)
{
  return `${name} is cool`;
}

function calculateCube(num)
{
  let thisCube = 1
  for(let i = 0; i < 3; i++)
  {
    thisCube *= num;
  }
  return thisCube;
}

console.log(calculateCube(3));

function isAVowel(letter)
{
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelcount = 0;
  letter = letter.toLowerCase();

  for(let i = 0; i < vowels.length; i++)
  {
    if(letter === vowels[i])
    {
      vowelcount++;
    }
  }

  if(vowelcount > 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

console.log(isAVowel("a"));
console.log(isAVowel("t"));

function getTwoLengths(string1, string2)
{
  let thisArray = [];
  thisArray[0] = string1.length;
  thisArray[1] = string2.length;

  return thisArray;
}

myArray = getTwoLengths("tom", "hank");

console.log(myArray);

function getMultipleLengths(stringArray)
{
  let lengthsArray = [];
  for(let i = 0; i < stringArray.length; i++)
  {
    lengthsArray[i] = stringArray[i].length;
  }
  return lengthsArray;
}

function maxOfThree(num1, num2, num3)
{
  if((num1 > num2) && (num1 > num3))
  {
    return num1;
  }
  else if((num2 > num1) && (num2 > num3))
  {
    return num2;
  }
  else if((num3 > num1) && (num3 > num2))
  {
    return num3;
  }
}

console.log(maxOfThree(32, 45, 28));
console.log(maxOfThree(57, 50, 56));
console.log(maxOfThree(57, 34, 68));

function printLonggestWord(stringArray)
{
  let lengthsArray = [];
  let indexOfLargest = 0;

  for(let i = 0; i < stringArray.length - 1; i++)
  {
    lengthsArray[i] = stringArray[i].length;
  }

  for(let i = 1; i < stringArray.length; i++)
  {
    if(lengthsArray[i] <= lengthsArray[i+1])
    {
      indexOfLargest = i + 1;
    }
  }

  return stringArray[indexOfLargest];
}

function transmogrify(num1, num2, num3)
{
  let base = num1 * num2;
  let exponential = Math.exp(base, num3);

  return exponential;
}

// Me
let me = {
  name: "Michael",
  age: 30,
  email: "michael.richards@ucdenver.edu"
}

// Slimer
me.name;
me[age] = 1000;
me.age;
me.placeOfResidence = "Westminster";

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

// console.log(monster.name);
// monster.type = "creature";
// monster.age = 6;
//

// Ogres
adventurer = {
  name: "Link",
  hitpoints: 30,
  attack: 10,
  defense: 15
};

ogre = {
  hitpoints: 45,
  attack: 20,
  defense: 2
};

while((ogre.hitpoints > 0) && (adventurer.hitpoints > 0))
{
  adventurer.hitpoints -= (ogre.attack - adventurer.defense);
  ogre.hitpoints -= (adventurer.attack - ogre.defense);
}

if(adventurer.hitpoints > ogre.hitpoints)
{
  console.log("The adventurer wins!");
}
else if(adventurer.hitpoints === ogre.hitpoints)
{
  console.log("It is a draw.")
}
else{
  console.log("The adventurer lost...");
}
