import { capitalize, reverseString, calculator, caesarCipher, analyzeArray, analyzedArray } from "./script.js";

test('capitalize first character', () => {
  expect(capitalize('car')).toEqual('Car');
});

test('reverse string', () => {
  expect(reverseString('Elephant')).toEqual('tnahpelE');
  expect(reverseString('012345')).toEqual('543210');
  expect(reverseString('Vladislav')).toEqual('valsidalV');
  expect(reverseString('Hello!')).toEqual('!olleH');
  expect(reverseString('Hello_World!')).toEqual('!dlroW_olleH');
});

test('calculator', () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(0, 1)).toBe(1);
  expect(calculator.add(99, 1)).toBe(100);

  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(0, 2)).toBe(-2);
  expect(calculator.subtract(4, 2)).toBe(2);

  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.multiply(0, 2)).toBe(0);
  expect(calculator.multiply(9, 2)).toBe(18);

  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.divide(18, 2)).toBe(9);
  expect(calculator.divide(16, 4)).toBe(4);
});

test('caesar cipher', () => {
  expect(caesarCipher('xyz', 3)).toEqual('abc');
  expect(caesarCipher('HeLLo', 3)).toEqual('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!');
});

test('analyze array', () => {
  expect(analyzedArray).toEqual(
    {
      average: 4,
      min: 1,
      max: 8,
      length: 6
    }
  );
});