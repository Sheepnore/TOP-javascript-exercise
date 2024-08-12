const sumAll = function(num1, num2) {
  let largerNum;
  let smallerNum;
  let sumBoth = num1 + num2;

  if (num1 > 0 && num2 > 0 && Number.isInteger(sumBoth) && !isNaN(sumBoth)){
    if (num2 > num1){
      largerNum = num2;
      smallerNum = num1;
    }
    else {
      largerNum = num1;
      smallerNum = num2;
    }

    return (largerNum * (smallerNum + largerNum))/2
  }
  else{
    return 'ERROR'
  }
  
};

// Do not edit below this line
module.exports = sumAll;
