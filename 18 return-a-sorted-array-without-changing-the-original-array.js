const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newAr = arr.slice();
  newAr = newAr.sort(function(a, b) {
    return a - b;
  });
  return newAr;

  // Only change code above this line
}

nonMutatingSort(globalArray);