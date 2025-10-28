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
