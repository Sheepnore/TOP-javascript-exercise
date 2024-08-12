const convertToCelsius = function(Fahrenheit) {
  let degree = 0;
  degree = Number(((Fahrenheit - 32) / 1.8).toFixed(1)) 
  return degree
};

const convertToFahrenheit = function(Celsius){
  let degree = 0;
  degree = Number(((Celsius * 1.8) + 32).toFixed(1));
  return degree;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
