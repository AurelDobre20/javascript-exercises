const convertToCelsius = function(number) {
  if(number % 32 == 0){
    let b = (number - 32)* 5/9;
    return b;
  }else{
    let a = (number - 32)* 5/9;
    let a1 = Number(a.toFixed(1));
    
    return a1;
  }
};

const convertToFahrenheit = function(number) {
  if(number % 0 == 0){
    let b = (number * 9/5 + 32);
    return b;
  }else{
    let a = (number * 9/5 + 32);
    let a1 = Number(a.toFixed(1));
    
    return a1;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
