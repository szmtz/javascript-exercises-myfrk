// const convertToCelsius = function() {
// };

// const convertToFahrenheit = function() {
// };

function convertToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return celsius.toFixed(1);
}

// // Example usage:
// const fahrenheitTemp = 68;
// const celsiusTemp = fahrenheitToCelsius(fahrenheitTemp);
// console.log(`${fahrenheitTemp}°F is approximately ${celsiusTemp}°C.`);


function convertToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit.toFixed(1);
}

// // Example usage:
// const celsiusTemp = 20;
// const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
// console.log(`${celsiusTemp}°C is approximately ${fahrenheitTemp}°F.`);




// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
