export function updateOne(array, element) {
  /*
  Takes in an array and element in the array to be updated
  and return a new array without mutating old one.

  If element can not be found in array, returns old array as it is.
   */
  const indexOfElement = array.findIndex(el => el.id === element.id);
  const newArray = Array.from(array);
  if (indexOfElement > -1) {
    newArray[indexOfElement] = element;
  }
  return newArray;
}


export function addOne(array, element) {
  const newArray = Array.from(array);
  newArray.push(element);
  return newArray;
}

export function deleteOne(array, id) {
  const indexOfElement = array.findIndex(element => element.id === id);
  const newArray = Array.from(array);
  if (indexOfElement > -1) {
    newArray.splice(indexOfElement, 1);
  }
  return newArray;
}
