// const fibonacci = function() {

// };

function fibonacci(n) {
    if (n <= 0) {
      return "Invalid input. n should be a positive integer.";
    } else if (n === 1) {
      return 0; // First Fibonacci number
    } else if (n === 2) {
      return 1; // Second Fibonacci number
    } else {
      let a = 0;
      let b = 1;
      let result;
      for (let i = 3; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
      }
      return result;
    }
  }
  
//   // Example usage:
//   const n = 7; // Get the 7th Fibonacci number (assuming 1-indexed)
//   const fibNumber = fibonacci(n);
//   console.log(`The ${n}th Fibonacci number is ${fibNumber}.`);
  


// Do not edit below this line
module.exports = fibonacci;
