const getTheTitles = function(arrObj){

  let result = arrObj.map(obj => {
    return  obj.title
  })
  return result;
};

// Do not edit below this line
module.exports = getTheTitles;
