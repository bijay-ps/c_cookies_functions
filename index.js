// document.addEventListener('click', addition);

function addition() {
    const input1 = document.getElementById('num1');
    const num1 = Number(input1.value);
    console.log(num1);

    const input2 = document.getElementById('num2');
    const num2 = Number(input2.value);
    console.log(num2);

    const result = num1 + num2;
    console.log(result);

    const alertStr = "The sum of " + num1 + " and " + num2 + " is: " + result;
    alert(alertStr);

    const inFromUser = prompt("Enter first number: ")
    console.log(inFromUser);
}