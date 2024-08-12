const removeFromArray = function(array, ...removeItems){
  let temp = array;

  for (let i = 0; i<removeItems.length; i++){
    temp = temp.filter(item => item!== removeItems[i]);  
  }

  return temp

  //
  // let temp;
  //
  //  MISTAKE!! It only modifies the array by the last item in removeItems. 
  // for (let i = 0; i<removeItems.length; i++){
  //  temp = array.filter(item => item!== removeItems[i]);  
  // }
  //
  // return temp */

};

// Do not edit below this line
module.exports = removeFromArray;
