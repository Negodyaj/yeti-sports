// function declaration
function abc() {
  console.log('abc');
}

// function expression
let abc1 = function() {
  console.log('abc1');
};

function cleverAbc(someWord, someOtherWord) {
  console.log(someWord);
  console.log(someOtherWord);
  return 42;
}

const firstPhrase = 'hi there!';
const secondPhrase = 'hi there again!';

// const cleverAbcResult = cleverAbc(firstPhrase, secondPhrase);
// console.log(cleverAbcResult);

function multiplyTwoNumbers(number1, number2) {
  const parseResult1 = parseInt(number1); // NaN
  const isNaNResult1 = isNaN(parseResult1); // true
  if (isNaNResult1) {
    console.log('number1 is not a number');
  }
  const parseResult2 = parseInt(number2); // ???
  const isNaNResult2 = isNaN(parseResult2); // true or false
  if (isNaNResult2) {
    console.log('number2 is not a number');
  }
  if (isNaNResult1 || isNaNResult2)
  {
    return -1;
  }
  console.log('doing calculations');
  return number1 * number2;
}

console.log(multiplyTwoNumbers(42, 12)); // 42*12
console.log('--------------------------------');
console.log(multiplyTwoNumbers('aaa', 12)); // 'number1 is not a number'; -1
console.log('--------------------------------');
console.log(multiplyTwoNumbers(42, 'bbb')); // 'number2 is not a number'; -1
console.log('--------------------------------');
console.log(multiplyTwoNumbers('aaa', 'bbb'));
// 'number1 is not a number';
// 'number2 is not a number';
// -1