// Function Declaration
// test();

function test() {
    console.log("Hello from test function");
}

// Function Expressions
let i = 2;
let j = 5;
let k = 2*(i + j); // 2 * 7 = 14

const addition2Numbs = function(a,b) {
    console.log("from func exprsn",a+b);
}

// addition2Numbs(2,3);

// Anonymous Function
const fName = (function() {
    return "Bijay";
})();

// (function(a,b) {
//     return a*b;
// })(2,3);
// Jquery returns $
// console.log(fName);

// IIFE: Immediately invoked function expression

// Arrow Functions (fat arrow fuctions =>)

greet();

var greet = () => {
    console.log("Hello, my name is Bijay. I am a teacher");
}

// greet();

const division = (a,b) => a / b;

// The above code will behave like this:
// const division = (a,b) => {
//     return a/b;
// }

// console.log(division(10,2));

let arr = [11,-9,20,45];

// arr.forEach(function(e) {

// })

// arr.forEach(e => {
//     console.log(e);
// })


// Recurssive functions
// Program for countdown 
// 5 -> 5,4,3,2,1
// 10 -> 10,9,.....1

function countdown(number) {
    console.log(number);

    let newNumber = number - 1;

    // Base case
    if(newNumber > 0) {
        countdown(newNumber);
    }
}

// countdown(5)

function factorial(x) {
    if (x === 0) return 1;
    else {
       return x * factorial(x-1)
    }
}

const fact5 = factorial(5);

// console.log(fact5);

// Generator function

function* generator(i) {
    let fName = "Jane";
    yield i;
    yield 2*i;
    yield 3*i;

    // return "Hello"
}

const gen = generator(2);
// console.log(gen);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);


function* infiniteLoop() {
    while(true) {
        yield 1;
    }
}

const genrtr = infiniteLoop();

console.log(genrtr.next().value);
console.log(genrtr.next().value);
console.log(genrtr.next().value);
console.log(genrtr.next().value);
console.log(genrtr.next().value);
console.log(genrtr.next().value);
console.log(genrtr.next().value);
console.log(genrtr.next().value);
