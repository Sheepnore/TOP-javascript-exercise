const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a -b;
};

const sum = function(nums) {
  let temp = 0;
  if (nums.length === 0){
    return 0
  }
  else{
    nums.forEach((num)=>{
      temp += num;
    })
    return temp;
  }
};

const multiply = function(nums) {
  let result = 0;
  if (nums.length === 0){
    return 0
  }
  else{
    result = nums.reduce((accumulator,currentValue)=>{
      return accumulator * currentValue;
    },)
  }
  return result;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  let arr = [];
  if (a === 0){
    return 1
  }

  for (let i = a; i>=1; i--){
    arr.push(i)
  }
  let factor = arr.reduce((accumulator, currentValue)=> {
    return accumulator * currentValue;
  },)
  return factor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
