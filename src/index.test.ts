import { twoSum } from './index';

function checkResult(result: number[], input: number[], target: number) {
  if (result.length !== 2) {
    return false;
  }
  
  if (result[0] === result[1]) {
    return false;
  }

  if (input[result[0]] + input[result[1]] !== target) {
    return false;
  }

  return true;
}

describe('twoSum', () => {
  test('Detects two numbers that add up to the target', () => {
    expect(checkResult(twoSum([2, 7, 11, 15], 9), [2, 7, 11, 15], 9)).toBe(true);
    expect(checkResult(twoSum([3, 2, 4], 6), [3, 2, 4], 6)).toBe(true);
    expect(checkResult(twoSum([1, 2, 3, 4, 5, 6], 6), [1, 2, 3, 4, 5, 6], 6)).toBe(true);
    expect(checkResult(twoSum([1, 2, 3, 4, 5, 6, 7], 7), [1, 2, 3, 4, 5, 6, 7], 7)).toBe(true);
  });

  test('Returns empty array for no two numbers that add up to the target', () => {
    expect(twoSum([1,2,3], 6)).toEqual([]);
    expect(twoSum([1,2,3,4,5], 10)).toEqual([]);
  });
}); 
