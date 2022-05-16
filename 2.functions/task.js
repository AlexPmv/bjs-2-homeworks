// Задание 1
function getArrayParams(arr) {
  let min = arr[0], max = arr[0], sum = 0, avg;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (min > arr[i + 1]) {
      min = arr[i + 1];
    } else if (max < arr[i + 1]) {
      max = arr[i + 1];
    }; 

    if ((i + 1) === arr.length) {
      avg = +((sum/arr.length).toFixed(2));
    };
  };

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
  for (let i = 0; i < arrOfArr.length - 1; i++) {
      if (max < func(arrOfArr[i + 1])) {
        max = func(arrOfArr[i + 1]);
    };
  };
  return max;
};

// Задание 3
function worker2(arr) {
  let min = arr[0], max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i + 1]) {
      min = arr[i + 1];
    } else if (max < arr[i + 1]) {
      max = arr[i + 1];
    }; 

    if ((i + 1) === arr.length) {
      return Math.abs(max - min);
    };
  };
};
