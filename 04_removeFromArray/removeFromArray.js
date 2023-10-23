// const removeFromArray = function() {

// };

function removeFromArray(array, ...argsToRemove) {
    if (!Array.isArray(array)) {
      throw new Error('The first argument must be an array.');
    }
  
    return array.filter(item => !argsToRemove.includes(item));
  }
  
//   // Example usage:
//   const originalArray = [1, 2, 3, 4, 5];
//   const newArray = removeFromArray(originalArray, 3, 5);
//   console.log(newArray); // Outputs: [1, 2, 4]
  



// Do not edit below this line
module.exports = removeFromArray;
