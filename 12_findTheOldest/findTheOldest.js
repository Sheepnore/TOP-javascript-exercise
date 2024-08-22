const findTheOldest = function(arrObj) {
  // Add `years` prop to object
  const modified = arrObj.map( obj => {
    if (!obj.yearOfDeath){
      const currentDate = new Date();
      const currentFullYear = currentDate.getFullYear();
      obj.yearOfDeath = currentFullYear;
    }

    obj.years = obj.yearOfDeath - obj.yearOfBirth;
    return obj
  })

  // Find `oldest` value
  let oldest = 0;
  modified.forEach(obj => {
    if (obj.years > oldest){
      oldest = obj.years;
    }
  })

  // Find the obj that matches `oldest` value 
  let returnResult;
  modified.forEach( obj => {
    if (obj.years === oldest){
      returnResult = obj
    }
  })

  return returnResult;
};

// Do not edit below this line
module.exports = findTheOldest;
