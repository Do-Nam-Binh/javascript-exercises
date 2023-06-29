const convertToCelsius = function(temperature) {
  return Number((Math.round((((temperature - 32) * 5) / 9) * 10) / 10).toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  return Number((Math.round(((temperature * 9/5) + 32) * 10) / 10).toFixed(1));
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
