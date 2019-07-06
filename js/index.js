console.log("testing...");
// Basic JavaScript: Comment Your JavaScript Code
/*Exercise:
1. Create a // style comment that contains at least five letters.
2. Create a '/*' '*'/ style comment that contains at least five letters. */

// Basic JavaScript: Declare JavaScript Variables
var myName;

// Basic JavaScript: Storing Values with the Assignment Operator
a = 7;
b = a;

// Basic JavaScript: Initializing Variables with the Assignment Operator
var a = 9;

// Basic JavaScript: Understanding Uninitialized Variables
// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

// Basic JavaScript: Understanding Case Sensitivity in Variables
// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Basic JavaScript: Add Two Numbers with JavaScript
var sum = 10 + 10;
sum;

// Basic JavaScript: Subtract One Number from Another with JavaScript
// var difference = 45 - 0;
var difference = 45 - 33;
var difference = 45 - 1;

difference - 33;
difference - 1;

// Basic JavaScript: Multiply Two Numbers with JavaScript
var product = 8 * 10;
// Basic JavaScript: Divide One Number by Another with JavaScript
var quotient = 66 / 33;

// Basic JavaScript: Increment a Number with JavaScript
var myVar = 87;
// Only change code below this line
// myVar = myVar + 1;
myVar++;

// Basic JavaScript: Decrement a Number with JavaScript
var myVar = 11;
// Only change code below this line
// myVar = myVar - 1;
myVar = myVar--;

// Basic JavaScript: Create Decimal Numbers with JavaScript
var ourDecimal = 5.7;
// Only change code below this line
var myDecimal = 4.3;

// Basic JavaScript: Multiply Two Decimals with JavaScript
var product = 2.0 * 2.5; // <= 5.0
// Basic JavaScript: Divide One Decimal by Another with JavaScript
var quotient = 0.0 / 2.0; // Fix this line
var quotient = 4.4 / 2.0; // <= 2.2

// Basic JavaScript: Finding a Remainder in JavaScript
// Only change code below this line
var remainder = 11 % 3;

// Basic JavaScript: Compound Assignment With Augmented Addition
var a = 3;
var b = 17;
var c = 12;
// Only modify code below this line
a += 12;
b += 9;
c += 7;

// Basic JavaScript: Compound Assignment With Augmented Subtraction
var a = 11;
var b = 9;
var c = 3;
// Only modify code below this line
a -= 6;
b -= 15;
c -= 1;

// Basic JavaScript: Compound Assignment With Augmented Multiplication
var a = 5;
var b = 12;
var c = 4.6;
// Only modify code below this line
a *= 5;
b *= 3;
c *= 10;

// Basic JavaScript: Compound Assignment With Augmented Division
var a = 48;
var b = 108;
var c = 33;
// Only modify code below this line
a /= 12;
b /= 4;
c /= 11;

// Basic JavaScript: Declare String Variables
// Example
var firstName = "Alan";
var lastName = "Turing";
// Only change code below this line
var myFirstName = "William";
var myLastName = "Fiallos";

// Basic JavaScript: Escaping Literal Quotes in Strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// Basic JavaScript: Quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Basic JavaScript: Escape Sequences in Strings
/*Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed */
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// Basic JavaScript: Concatenating Strings with Plus Operator
// Example
var ourStr = "I come first. " + "I come second.";
// Only change code below this line
var myStr = "This is the start. " + "This is the end.";

// Basic JavaScript: Concatenating Strings with the Plus Equals Operator
// Example
var ourStr = "I come first. ";
ourStr += "I come second.";
// Only change code below this line
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Basic JavaScript: Constructing Strings with Variables
// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
// Only change code below this line
var myName = "William Fiallos";
var myStr = "My name is " + myName + " and I am well!";

// Basic JavaScript: Appending Variables to Strings
// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
// Only change code below this line
var someAdjective = "bloody awesome!";
var myStr = "Learning to code is ";
myStr += someAdjective;

// Basic JavaScript: Find the Length of a String
// Example
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";
// Only change code below this line.
lastNameLength = lastName.length;
lastName.length;

// Basic JavaScript: Use Bracket Notation to Find the First Character in a String
// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName[0];

// Basic JavaScript: Understand String Immutability
// Setup
var myStr = "Jello World";
// Only change code below this line
myStr = "Hello World"; // Fix Me

// Basic JavaScript: Use Bracket Notation to Find the Nth Character in a String
// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
// Setup
var lastName = "Lovelace";
// Only change code below this line.
var thirdLetterOfLastName = lastName[2];

// Basic JavaScript: Use Bracket Notation to Find the Last Character in a String
// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];
// Setup
var lastName = "Lovelace";
// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];

// Basic JavaScript: Use Bracket Notation to Find the Nth-to-Last Character in a String
// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
// Setup
var lastName = "Lovelace";
// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

// Basic JavaScript: Word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
  result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" away "+myAdverb+".";
  // Your code above this line
  return result;
}
// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");

// Basic JavaScript: Store Multiple Values in one Variable using JavaScript Arrays
// Example
var ourArray = ["John", 23];
// Only change code below this line.
var myArray = ["William", 31];

// Basic JavaScript: Nest one Array within Another Array
// Example
var ourArray = [["the universe", 42], ["everything", 101010]];
// Only change code below this line.
var myArray = [['William', 31], ['Steffi', 24]];

// Basic JavaScript: Access Array Data with Indexes
// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50
// Setup
var myArray = [50,60,70];
// Only change code below this line.
var myData = myArray[0];

// Basic JavaScript: Modify Array Data With Indexes
// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].
// Setup
var myArray = [18,64,99];
// Only change code below this line.
myArray[0] = 45;

// Basic JavaScript: Access Multi-Dimensional Arrays With Indexes
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
// Only change code below this line to equal myData to 8.
var myData = myArray[0][0];
myData = myArray[2][1];

// Basic JavaScript: Manipulate Arrays With push()
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); 
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
// Setup
var myArray = [["John", 23], ["cat", 2]];
// Only change code below this line.
myArray.push(["dog", 3]);

// Basic JavaScript: Manipulate Arrays With pop()
// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); 
// removedFromOurArray now equals 3, and ourArray now equals [1,2]
// Setup
var myArray = [["John", 23], ["cat", 2]];
// Only change code below this line.
var removedFromMyArray = myArray.pop();
removedFromMyArray;

// Basic JavaScript: Manipulate Arrays With shift()
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
// Setup
var myArray = [["John", 23], ["dog", 3]];
// Only change code below this line.
var removedFromMyArray = myArray.shift();

// Basic JavaScript: Manipulate Arrays With unshift()
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); 
// ourArray now equals ["Happy", "J", "cat"]
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
// Only change code below this line.
myArray.unshift(["Paul", 35]);

// Basic JavaScript: Shopping List
var myList = [];
myList.push(["shampoo", 1], ["soap", 1], ["toothpaste", 1], ["deodorant", 1], ["cologne", 1]);

// Basic JavaScript: Write Reusable JavaScript with Functions
// Example
function ourReusableFunction() {
  console.log("Heyya, World");
}
ourReusableFunction();
// Only change code below this line
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

// Basic JavaScript: Passing Values to Functions with Arguments
// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5
// Only change code below this line.
function functionWithArgs(a, b){
  console.log(a + b);
}
functionWithArgs(5, 5);

// Basic JavaScript: Global Scope and Functions
// Declare your variable here
var myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Basic JavaScript: Local Scope and Functions
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "foo";
  console.log(myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);
// Now remove the console log line to pass the test

// Basic JavaScript: Global vs. Local Scope in Functions
// Setup
var outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater"; 
  // Only change code above this line
  return outerWear;
}
myOutfit();

// Basic JavaScript: Return a Value from a Function with Return
// Example
function minusSeven(num) {
  return num - 7;
}
// Only change code below this line
function timesFive(num) {
  return num * 5;
}
console.log(timesFive(5));

// Basic JavaScript: Understanding Undefined Value returned from a Function
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}
// Only change code below this line
var sum = 0;
function addFive() {
  sum = sum + 5;
}
// Only change code above this line
var returnedValue = addFive();

// Basic JavaScript: Assignment with a Returned Value
// Example
var changed = 0;
function change(num) {
  return (num + 5) / 3;
}
changed = change(10);
// Setup
var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
// Only change code below this line
processed = processArg(7);

// Basic JavaScript: Stand in Line
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  let removed = arr.shift();
  return removed;  // Change this line
}
// Test Setup
var testArr = [1,2,3,4,5];
// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

// Basic JavaScript: Understanding Boolean Values
function welcomeToBooleans() {
  // Only change code below this line.
  return true; // Change this line
  // Only change code above this line.
  }

  // Basic JavaScript: Use Conditional Logic with If Statements
  // Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) { 
    return "Yes, it's true";
  }
  return "No, it's false";
}
// Setup
function trueOrFalse(wasThatTrue) {
  // Only change code below this line.
  if (wasThatTrue) {
    return "Yes, that was true";
  }
    return "No, that was false";
  // Only change code above this line.
}
// Change this value to test
trueOrFalse(true);

// Basic JavaScript: Comparison with the Equality Operator
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
// Change this value to test
testEqual(10);

// Basic JavaScript: Comparison with the Strict Equality Operator
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
// Change this value to test
testStrict(10);

// Basic JavaScript: Practice comparing different values
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
// Change this value to test
compareEquality(10, "10");

// Basic JavaScript: Comparison with the Inequality Operator
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
// Change this value to test
testNotEqual(10);

// Basic JavaScript: Comparison with the Strict Inequality Operator
// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line
  if (val !== 17) {
  // Only Change Code Above this Line
    return "Not Equal";
  }
  return "Equal";
}
// Change this value to test
testStrictNotEqual(10);

// Basic JavaScript: Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
// Change this value to test
testGreaterThan(10);

// Basic JavaScript: Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }
  return "Less than 10";
}
// Change this value to test
testGreaterOrEqual(10);

// Basic JavaScript: Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }
  if (val < 55) {  // Change this line
    return "Under 55";
  }
  return "55 or Over";
}
// Change this value to test
testLessThan(10);

// Basic JavaScript: Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
// Change this value to test
testLessOrEqual(10);

// Basic JavaScript: Comparisons with the Logical And Operator
function testLogicalAnd(val) {
  // Only change code below this line
  if (val > 24 && val < 51) {
    return "Yes";
  }
  // Only change code above this line
  return "No";
}
// Change this value to test
testLogicalAnd(10);

// Basic JavaScript: Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  // Only change code below this line
  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}
// Change this value to test
testLogicalOr(15);

// Basic JavaScript: Introducing Else Statements
function testElse(val) {
  var result = "";
  // Only change code below this line 
  if (val <= 5) {
    return "5 or Smaller";
  } else { 
    return "Bigger than 5"
  }
  // Only change code above this line
  return result;
}
// Change this value to test
testElse(4);

// Basic JavaScript: Introducing Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
  }
}
// Change this value to test
testElseIf(7);

// Basic JavaScript: Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
// Change this value to test
orderMyLogic(7);

// Basic JavaScript: Chaining If Else Statements
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny"
  } else if (num < 10) {
    return "Small"
  } else if (num < 15) {
    return "Medium"
  } else if (num < 20) {
    return "Large"
  } else if (num >= 20) {
    return "Huge"
  } else {
  return "Change Me";
  }
  // Only change code above this line
}
// Change this value to test
testSize(7);

// Basic JavaScript: Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par -2) {
    return names[1];
  } else if (strokes === par -1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  } else {
  return "Change Me";
  }
  // Only change code above this line
}
// Change these values to test
golfScore(5, 4);

// Basic JavaScript: Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
      return "alpha";
    break;
    case 2:
      return "beta";
    break;
    case 3:
      return "gamma";
    break;
    case 4:
      return "delta";
    break;
  }
  // Only change code above this line  
  return answer;  
}
// Change this value to test
caseInSwitch(1);

// Basic JavaScript: Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
    return "apple";
    break;
    case "b":
    return "bird";
    break;
    case "c":
    return "cat";
    break;
    default:
    return "stuff";
    break;
  }
  // Only change code above this line  
  return answer;  
}
// Change this value to test
switchOfStuff(1);


// Basic JavaScript: Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
    return "Low";
    break;
    case 4:
    case 5:
    case 6:
    return "Mid";
    break;
    case 7:
    case 8: 
    case 9:
    return "High";
    break;
  }
  // Only change code above this line  
  return answer;  
}
// Change this value to test
sequentialSizes(1);

// Basic JavaScript: Replacing If Else Chains with Switch
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){ 
    case "bob": 
      return "Marley";
      break;
    case 42:
      return "The Answer";
      break;
    case 1:
      return "There is no #1";
      break;
    case 99: 
      return "Missed me by this much!";
      break;
    case 7:
      return "Ate Nine";
      break;
    default:
      return "";
      break;
  }
  // Only change code above this line  
  return answer;  
}
// Change this value to test
chainToSwitch(7);

// Basic JavaScript: Returning Boolean Values from Functions
function isLess(a, b) {
  // Fix this code
  return a < b;
}
// Change these values to test
isLess(10, 15);

// Basic JavaScript: Return Early Pattern for Functions
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0){
    return undefined;
  } else if (b < 0){
    return undefined;
  } 
  // Only change code above this line
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
// Change values below to test your code
abTest(2,2);

// Basic JavaScript: Counting Cards
var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0){
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}
// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');

// Basic JavaScript: Build JavaScript Objects
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
// Only change code below this line.
var myDog = {
  "name": "Rocky",
  "legs": 4,
  "tails": 1,
  "friends": ["Rambo", "Muneca"]
};

// Basic JavaScript: Accessing Object Properties with Dot Notation
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
// Only change code below this line
var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

// Basic JavaScript: Accessing Object Properties with Bracket Notation
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
// Only change code below this line
var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line

// Basic JavaScript: Accessing Object Properties with Variables
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
// Only change code below this line;
var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line

// Basic JavaScript: Updating Object Properties
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.name = "Happy Camper";
// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
// Only change code below this line.
myDog.name = "Happy Coder";
// or
myDog["name"] = "Happy Coder";

// Basic JavaScript: Add New Properties to a JavaScript Object
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.bark = "bow-wow";
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
// Only change code below this line.
myDog.bark = "woof-woof";
// or
myDog["bark"] = "woof-woof";

// Basic JavaScript: Delete Properties from a JavaScript Object
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line.
delete myDog.tails;
// or
delete myDog["tails"];

// Basic JavaScript: Using Objects for Lookups
// Setup
function phoneticLookup(val) {
  var result = "";
  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }
  result = lookup[val];

  // Only change code above this line
  return result;
}
// Change this value to test
phoneticLookup("charlie");

// Basic JavaScript: Testing Objects for Properties
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) === true) {
  return myObj[checkProp];
  } else {
    return "Not Found";
  }
};
// Test your code by modifying these values
checkObj("gift");

// Basic JavaScript: Manipulating Complex Objects
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Blink 182",
    "title": "Enema of the State",
    "release_year": 1999,
    "formats": [
      "CD",
      "Cassette",
      "LP"
    ]
  }
  // Add record here
];

// Basic JavaScript: Accessing Nested Objects
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

// Basic JavaScript: Accessing Nested Arrays
// Setup
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];
// Only change code below this line
var secondTree = myPlants[1].list[1]; // Change this line

// Basic JavaScript: Record Collection
// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
if (prop === "tracks" && value !== "") {
 if(collection[id][prop]) {
  collection[id][prop].push(value);
 }
 else {
  collection[id][prop]=[value];
 }
} else if (value !== "") {
  collection[id][prop] = value;
} else {
  delete collection[id][prop];
}

return collection;
}
// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

// Problem Explanation:

// You are given a JSON object representing (a small part of) your record collection. Each album is identified by a unique id number and has several properties. Not all albums have complete information.
// Write a function which takes an id, a property (prop), and a value.
// For the given id in collection:
// If value is non-blank (value !== ""), then update or set the value for the prop.
// If the prop is “tracks” and value is non-blank, check to see if the given element in the array has the property of “tracks”. 
// If the element has the property of “tracks”, push the value onto the end of the “tracks” array. If the element does not have the property, create the property and value pair.
// If value is blank, delete that prop.
// Always return the entire collection object.

// Change the code below // Only change code below this line and up to // Alter values below to test your code.
// Take note that you are editing the inside of the updateRecords function.
// For the given id parameter, which is associated to the collection object:

// If the value parameter isn’t an empty string, update (or set) the value parameter for the prop parameter.
// If the prop parameter is equal to "tracks" and the value isn’t an empty string, push the value onto the end of the tracks array.
// If value is an empty string, delete that prop from the object.
// Finally, return the collection object.

// Hint: 1
// Use an else if statement to check the needed steps.

// Hint: 2
// The second step listed in the instructions should be first in your else if statement.

// Hint: 3
// To access the value of a key in this object, you will use collection[id][prop].

// Code Explanation:
// First checks if prop is equal to tracks AND if value isn’t a blank string. If both tests pass, value is pushed into the tracks array.
// If that first check doesn’t pass, it next checks only if value isn’t a blank string. If that test passes, either a new key (prop) and value (value) are added to the object, or an existing key is updated if the prop already exists.
// If both these checks fail (meaning value must be an empty string), then the key (prop) is removed from the object.
// Example Run

// updateRecords(5439, "artist", "ABBA"); runs.
// prop is equal to “artist”, not “tracks”, so the first part of the else if statement fails.
// value is not a blank string, so the second part of the else if statement passes.
// artist: "ABBA" is added to the 5439 id.

// ---------------------------------------


// Basic JavaScript: Iterate with JavaScript While Loops
// You can run the same code multiple times by using a loop.

// The first type of loop we will learn is called a "while" loop because it runs 
// "while" a specified condition is true and stops once that condition is no longer true.

// Setup
var myArray = [];

// Only change code below this line.
let i = 0;
while(i < 5 ){
  myArray.push(i);
  i++;
}
// myArray[0, 1, 2, 3, 4];

// Basic JavaScript: Iterate with JavaScript For Loops
// You can run the same code multiple times by using a loop.

// The most common type of JavaScript loop is called a "for loop" because it runs "for" a specific number of times.

// For loops are declared with three optional expressions separated by semicolons:
// for ([initialization]; [condition]; [final-expression])

// The initialization statement is executed one time only before the loop starts. 
// It is typically used to define and setup your loop variable.

// The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. 
// When condition is false at the start of the iteration, the loop will stop executing. This means if condition starts as false, your loop will never execute.

// The final-expression is executed at the end of each loop iteration, 
// prior to the next condition check and is usually used to increment or decrement your loop counter.

// In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. 
// We'll increment i by 1 in each loop iteration with i++ as our final-expression.

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 1; i <= 6; i++) {
    myArray.push(i);
}

// Basic JavaScript: Iterate Odd Numbers With a For Loop
// Example
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
// Setup
var myArray = [];
// Only change code below this line.
for (var i = 1; i < 11; i += 2) {
  myArray.push(i);
}
// myArray = [1,3,5,7,9]

// Basic JavaScript: Count Backwards With a For Loop
// Example
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
// Setup
var myArray = [];
// Only change code below this line.
for (i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
// myArray[9,7,5,3,1];

// Basic JavaScript: Iterate Through an Array with a For Loop
// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;
for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}
// Setup
var myArr = [ 2, 3, 4, 5, 6];
// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// Basic JavaScript: Nesting For Loops
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    product = product * arr[i][j];
  }
}
  // Only change code above this line
  return product;
}
// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);

// Basic JavaScript: Iterate with JavaScript Do...While Loops
// Setup
var myArray = [];
var i = 10;
// Only change code below this line.
do {
  myArray.push(i);
  i++;
} while (i < 10);

// Basic JavaScript: Profile Lookup
//Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];
function lookUpProfile(name, prop){
// Only change code below this line
for (var x = 0; x < contacts.length; x++){
  if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
      } else {
          return "No such property";
      }
  }
}
return "No such contact";
// Only change code above this line
}
// Change these values to test your function
lookUpProfile("Akira", "likes");

// Basic JavaScript: Generate Random Fractions with JavaScript
function randomFraction() {
  // Only change code below this line.
var result = 0;
  while (result === 0) {
    result = Math.random();
  }
  return result; 
  // Only change code above this line.
}

// Basic JavaScript: Generate Random Whole Numbers with JavaScript
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
  // Only change code below this line.
var result = 0;
while (result === 0){
  result = Math.floor(Math.random() * 10);
}
  return result;
}

// Basic JavaScript: Generate Random Whole Numbers within a Range
// Example
function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
ourRandomRange(1, 9);
// Only change code below this line.
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line
}
// Change these values to test your function
var myRandom = randomRange(5, 15);

