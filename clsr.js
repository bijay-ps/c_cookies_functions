function add(num1) {
    return function(num2) {
        console.log(num1);
        console.log(num2);
        console.log(num1 + num2);
    }
}

const x = add(5);
console.log(x);
x(10)