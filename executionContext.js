let topicName = "Execution Context";

function squareAndPrint(n) {
  let i = 3;
  const result = multiplyByItself(n);
  printResult(result);
}

function multiplyByItself(n) {
  return n * n;
}

function printResult(n) {
  console.log(n);
}

let num = 28;

squareAndPrint(5);
