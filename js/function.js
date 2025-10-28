function isLengthStr (str, length) {

  if (str.length > length) {
    return false;
  }

  return true;
}

const lengthFirstStr = isLengthStr('проверяемая строка', 20);
const lengthSecondStr = isLengthStr('проверяемая строка', 10);

console.log('lengthFirstStr: ', lengthFirstStr);
console.log('lengthSecondStr: ', lengthSecondStr);
console.log('');

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

const oneStrMetod = isPalindromeMetod('топот');
const twoStrMetod = isPalindromeMetod('ДовОд');
const threeStrMetod = isPalindromeMetod('Кекс');
const fourStrMetod = isPalindromeMetod('Лёша на полке клопа нашёл ');

console.log('oneStrMetod: ', oneStrMetod);
console.log('twoStrMetod: ', twoStrMetod);
console.log('threeStrMetod: ', threeStrMetod);
console.log('fourStrMetod: ', fourStrMetod);
console.log('');

const oneStrCycle = isPalindromeCycle('топот');
const twoStrCycle = isPalindromeCycle('ДовОд');
const threeStrCycle = isPalindromeCycle('Кекс');
const fourStrCycle = isPalindromeCycle('Лёша на полке клопа нашёл ');

console.log('oneStrCycle: ', oneStrCycle);
console.log('twoStrCycle: ', twoStrCycle);
console.log('threeStrCycle: ', threeStrCycle);
console.log('fourStrCycle: ', fourStrCycle);
console.log('');

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

console.log('getNumber: ', getPositiveIntegeNumber('sdf 2034 sdf1.5sd dfdf0.3'));

function getNumber (str) {
  if (typeof str === 'number') {
    str = String(str);
  }

  const resultStr = str.replace(/\D/g, '');

  console.log('resultStr: ', resultStr);
  return resultStr;
}

console.log('getNumber: ', getNumber('sdf 2034 sdf1.5sd dfdf0.3'));
