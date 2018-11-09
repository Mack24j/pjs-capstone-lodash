const _ = {
  clamp (number, lower, upper) {
    const lowerClampValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampValue, upper);
    return clampedValue;
  },

  inRange (number, start, end) {
    if(end === undefined) {
      end = start;
      start = 0;
    }
    if(start > end) {
      let temp;
      temp = end;
      end = start;
      start = temp;
    }
    isInRange = (start <= number && number < end)
    return isInRange;
  },

  words (string) {
    let words = string.split(' ');
    return words;
  },

  pad (string, length) {
    if(length <= string.length) {
      return string;
    }
    let startPaddingLength = Math.floor((length-string.length)/2);
    let endPaddingLength = (length - string.length - startPaddingLength);
    let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString
  },

  has (object, key) {
    let hasValue = object[key];
    if (hasValue !== undefined) {
      return true;
    } else {
      return false;
    }
    return hasValue;
  },

  invert (object) {
    let keys = Object.keys(object);
    let invertedObject = {};
  
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = object[key];
      invertedObject[value] = key;
    }
  
    return invertedObject;
  },

  findKey (object, predicate) {
    let keys = Object.keys(object);
    if (typeof predicate !== 'function') {
      //console.log('oops...you did not pass in a function as the 2nd arument...try again');
      return undefined;
    }
    for (let i = 0; i < keys.length; i++) {
      let key =keys[i];
      let value = object[key];
      console.log(value)
      let predicateReturnValue = predicate (value);
      if  (predicateReturnValue) {
        return key;
      } 
      
    }
    return undefined;
  },

  
  drop (array, n) {
    if (typeof n !== 'number') {
      n = 1
    }
    let droppedArray = (array.slice(n));
    return droppedArray;
  },

  dropWhile (array, predicate) {
    let callback = (element, index) => {
        return !predicate(element, index);
    };  
    let dropNumber = array.findIndex(callback);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  chunk (array, size) {
    if (typeof size === undefined) {
      size = 1
    }
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size)
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
  
};


// Do not write or modify code below this line.
module.exports = _;