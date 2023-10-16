// BASIC SYNTAX

function sayHello() {
    console.log('Hello!!, I am Bijay. I am your instructor for today')
}

for(let i=0; i<= 100; i++) {
    // sayHello(); // Calling a function
}

const prsn = {
    name: "Bijay",
    greet: function() {
        console.log("Hi");
    }
}

// prsn.greet() // Dot notation
// prsn['greet']() // Square Bracket notation


// Parameters
function addingTwoNumbs(a,b) {
   // code to add two numbs 
   console.log('line 25:', b);
   const result = a + b;
   return result;
   console.log('line 27: ', result);
}

const res = addingTwoNumbs(56, 23); // Arguments 56+23 = 79
// addingTwoNumbs(111,-986); // Arguments
console.log('line no. 33: ', res);

let i = 2;
let j = 5;
let k = i + j; // 2 + 5 = 7
console.log(k);