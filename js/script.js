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

