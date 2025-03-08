export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return string.split('').reverse().join('');
}

export const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  }
};

export function caesarCipher(string, shiftFactor) {
  return string.replace(/[a-zA-z]/g, (char) => {
    const isUpperCase = char >= 'A' && char <= 'Z';
    const base = isUpperCase ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + shiftFactor) % 26) + base);
  });
}

export function analyzeArray(array) {
  const object = {
    average: 0,
    min: 0,
    max: 0,
    length: 0
  };

  object.average = (array.reduce((a, b) => {
    return a + b;
  })) / array.length;

  object.min = Math.min(...array);

  object.max = Math.max(...array);

  object.length = array.length;

  return object;
}

export const analyzedArray = analyzeArray([1, 8, 3, 4, 2, 6]);