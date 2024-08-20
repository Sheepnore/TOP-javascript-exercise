const palindromes = function(string){
  const arr = string.split('')
  let cleanArray = arr.filter((char) => (char >= 'a' && char<= 'z') || (char >= 'A' && char <='Z'));

  const cleanString = cleanArray.join('').toLowerCase();
  const reversed = cleanArray.reverse();

  const cleanReversedString = reversed.join('').toLowerCase();
  
  if (cleanString === cleanReversedString){
    return true
  }
  else{
    return false
  }

};

// Do not edit below this line
module.exports = palindromes;
