// const sumAll = function() {

function sumAll(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
      return "Both arguments must be numbers.";
    }
  
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  
    return sum;
  }
  
//   // Example usage:
//   const result = sumNumbersBetween(1, 5);
//   console.log(result); // Outputs: 15 (1 + 2 + 3 + 4 + 5)


// Do not edit below this line
module.exports = sumAll;
