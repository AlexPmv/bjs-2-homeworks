function compareArrays(arr1, arr2) {
  let result;
  let workArray = Array.from(arguments);
  let checkValue = workArray[0].join('');
  return result = workArray.every((arr) => arr.join('') === checkValue);
}

function advancedFilter(arr) {
  let resultArr;
  return resultArr = arr.filter((item) => item >= 0 && item % 3 === 0).map((item) => item * 10);
}
