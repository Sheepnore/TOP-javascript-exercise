const leapYears = function(year) {
  let isLeapYear = false;
  // if a number is divisible by 100 or 400, it is also divisble by 4;
  let isDivisibleBy4 = year % 4 === 0;
  let isDivisibleBy100 = year % 100 === 0;
  let isDivisibleBy400 = year % 400 === 0;

  if(isDivisibleBy4){
    if (isDivisibleBy100 && isDivisibleBy400){
      isLeapYear = true;
    }
    else if (isDivisibleBy100){
      isLeapYear = false;
    }
    else{
      isLeapYear = true;
    }
  }
  
  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
