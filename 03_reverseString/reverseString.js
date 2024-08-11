// First, turn the string into a array using for loop
// Then, loop thru the array and return the last item in the array
// lastly, remove the last item in the array

const reverseString = function(string){

    let newString = [];
    let reversedString = '';
    

    for (let i = 0; i < string.length; i++){
      newString.push(string[i]);
     }

    let tempString = [...newString]; // deep copy using Spread operator `...`

     for (let i = 0; i < newString.length; i++){
      
      reversedString += tempString.at(-1);
      tempString.splice(-1,1);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
