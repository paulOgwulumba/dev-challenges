import { fizzBuzz } from './index';

describe('fizzBuzz', () => {
  test('returns "Fizz" for numbers divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('1 2 Fizz');
    expect(fizzBuzz(6)).toBe('1 2 Fizz 4 Buzz Fizz');
    expect(fizzBuzz(9)).toBe('1 2 Fizz 4 Buzz Fizz 7 8 Fizz');
  });

  test('returns "Buzz" for numbers divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('1 2 Fizz 4 Buzz');
    expect(fizzBuzz(10)).toBe('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz');
    expect(fizzBuzz(20)).toBe('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz');
  });

  test('returns "FizzBuzz" for numbers divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz');
    expect(fizzBuzz(30)).toBe('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz');
    expect(fizzBuzz(45)).toBe('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz');
  });

  test('returns the number as a string for numbers not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toBe('1');
    expect(fizzBuzz(2)).toBe('1 2');
    expect(fizzBuzz(4)).toBe('1 2 Fizz 4');
    expect(fizzBuzz(7)).toBe('1 2 Fizz 4 Buzz Fizz 7');
  });
}); 