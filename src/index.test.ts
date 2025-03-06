import { findMissingNumbers } from './index';

describe('findMissingNumbers', () => {
  test('Detects missing numbers', () => {
    expect(findMissingNumbers([3, 0, 1], 3)).toEqual([2]);
    expect(findMissingNumbers([9, 6, 4, 3, 5, 7, 0, 1], 10)).toEqual([2, 8, 10]);
    expect(findMissingNumbers([1, 2, 3, 4, 5], 5)).toEqual([0]);
  });

  test('Returns empty array for no missing numbers', () => {
    expect(findMissingNumbers([0, 1, 2, 3, 4, 5, 6], 6)).toEqual([]);
    expect(findMissingNumbers([0, 1, 2, 3, 4, 5, 6, 7], 7)).toEqual([]);
  });
}); 
