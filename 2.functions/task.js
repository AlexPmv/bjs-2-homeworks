// Задание 1
function getArrayParams(arr) {
  let min = arr[0], max = arr[0], sum = arr[0], avg;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if (min > arr[i]) {
      min = arr[i];
    } else if (max < arr[i]) {
      max = arr[i];
    }; 
  };
  avg = +((sum/arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
};

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  for (let i = 1; i < arrOfArr.length; i++) {
    const workerResult = func(arrOfArr[i]);
    if (max < workerResult) {
      max = workerResult;
    };
  };
  return max;
};

// Задание 3
function worker2(arr) {
  let min = arr[0], max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    } else if (max < arr[i]) {
      max = arr[i];
    }; 
  };  
  return Math.abs(max - min);
};
