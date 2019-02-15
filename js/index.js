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