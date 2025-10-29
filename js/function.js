function isLengthStr (str, length) {

  if (str.length > length) {
    return false;
  }

  return true;
}

function isPalindromeMetod (str) {
  const normStr = str.trim().replace(/\s+/g, '').toUpperCase();
  return normStr.split('').reverse().join('') === normStr;
}

function isPalindromeCycle (str) {
  const normStr = str.trim().replaceAll(' ', '').toUpperCase();
  const length = normStr.length;
  const halfLength = Math.floor(normStr.length / 2);

  for (let i = 0; i <= halfLength; i += 1) {
    if (normStr[i] !== normStr[length - (i + 1)]) {
      return false;
    }
  }

  return true;
}

function getPositiveIntegeNumber (str) {
  if (typeof str === 'number') {
    str = String(str);
  }

  const items = str.split('');
  let resultStr = '';

  for (let i = 0; i < items.length; i += 1) {
    if (items[i] >= '0' && items[i] <= '9') {
      resultStr += items[i];
    }
  }

  return Number(resultStr);
}


function getNumber (str) {
  if (typeof str === 'number') {
    str = String(str);
  }

  const resultStr = str.replace(/\D/g, '');

  return resultStr;
}

isLengthStr();
isPalindromeMetod();
isPalindromeCycle();
getPositiveIntegeNumber();
getNumber();

/* Решение дополнительных задач */

/* 2626.Array Reduce Transform */
function reduce (nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }

  let result = init;

  for (let i = 0; i < nums.length; i += 1) {
    result = fn(result, nums[i]);
  }

  return result;
}

/* 2634.Filter Elements from Array */
function filter (arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    const value = fn(arr[i], i);

    if (value) {
      result.push(arr[i]);
    }

  }

  return result;
}

/* 2620.Counter */
function createCounter(n) {
  let currentN = n;

  return function() {
    const saveCurrentN = currentN;
    currentN += 1;
    return saveCurrentN;
  };
}

/* 2635.Apply Transform Over Each Element in Array */
function map (arr, fn) {
  const resultArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    const item = fn(arr[i], i);
    resultArr.push(item);
  }

  return resultArr;
}

/* 2648.Generate Fibonacci Sequence */
const fibGenerator = function*() {
  let previous = 0;
  let current = 1;
  while (true) {
    yield previous;
    const temp = current;
    current = current + previous;
    previous = temp;
  }

};

reduce();
filter();
createCounter();
map();
fibGenerator();
