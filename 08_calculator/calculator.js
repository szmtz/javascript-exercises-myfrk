// const add = function() {
	
// };

// const subtract = function() {
	
// };

// const sum = function() {
	
// };

// const multiply = function() {

// };

// const power = function() {
	
// };

// const factorial = function() {
	
// };

const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// // Example usage:
// console.log("Addition:", add(5, 3)); // Outputs: 8
// console.log("Subtraction:", subtract(10, 4)); // Outputs: 6
// console.log("Sum:", sum([2, 3, 4, 5])); // Outputs: 14
// console.log("Multiplication:", multiply(6, 7)); // Outputs: 42
// console.log("Power:", power(2, 3)); // Outputs: 8
// console.log("Factorial:", factorial(5)); // Outputs: 120


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
