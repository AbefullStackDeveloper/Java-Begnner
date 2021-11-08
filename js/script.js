const button = document.querySelector("button");

button.addEventListener("mouseenter", function () {
  button.innerText = "Changed";
  document.body.style.backgroundColor = "red";
});
const MyName="Abby";
console.log(MyName);
console.log('injera');
//document.getElementById("myH").innerHTML = "My First Page";"this is Single line comment"
/*
document.getElementById("myH").innerHTML = "Welcome to my Homepage"; "Multi-line comment"
document.getElementById("myP").innerHTML = "This is my first paragraph.";
*/

    
 const people = [ {
        name: "Abby",
       isInstructor: true,
        score: 90,
        hairColor: 'Brown',
         favoriteFoods: [],
         friends: []
   }

];

console.log(people);

let text = "Supercalifragilisticexpialidocious;";
document.getElementById("lg").innerHTML = text.length;
console.log(text);
let numbers = 0;
let number = 1.5
typeof 1n === 'bigint'           // true
typeof BigInt('1') === 'bigint'  // true


const expected = 4n / 2n
// ↪ 2n

const truncated = 5n / 2n
// ↪ 2n, not 2.5n
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER)
// ↪ 9007199254740991n

const maxPlusOne = previousMaxSafe + 1n
// ↪ 9007199254740992n

console.log(previousMaxSafe);


// boolean with const
const yes = true;
// Primitive Data Types

const no = false;
// number
let numbers = 0;
let number = 1.5;
number = 1.27;
// string
let string = "my name";
let numberOrString = "1";
let string2 = `this has a super power`;
// undefined
var noAnswer = undefined;
const myNull = null;

//
let score = 0;
let selectUser = undefined;

// myArray    // answer    // myText     // score;
const memory = [[true], [0], [undefined], ["help"], [2], [0]];
number = 0;

// Edge Case
// BigInt
myBigInt = 19n;
// Symbol
mySymbol = Symbol("my symbol");

// Compound / Complex Data Types
// Array have [];
//   0, 1, 2, 3, 4
const myArray = [1, 2, 3, 4, 5]; // same type;
const myArray2 = [1, 2, 3, 4, 5, "a", "b", "c", true, false]; // mixed type;

// Object
const myObject = {
  name: "John", // key: value
  age: 30,
};
// bracket notation
//console.log(myArray[4]);
//console.log(myObject["name"]);

// dot notation
//console.log(myObject.name);
//console.log(myArray[0]); // arrays cannot be accessed with dot notation (myArray.0)

// Data Types continued...

//const myElement = document.getElementById("myElement");
//console.log(myElement);
//myElement.innerHTML = "<h1>Hello World</h1>";

// arithmetic operators
let answer = 5;

answer += 5;// 5 0+5=5
answer += 5; //10
answer -= 2; // 8
answer *= 2; // 16
answer /= 4; // 4




