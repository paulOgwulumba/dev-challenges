/**
  * Given an array of numbers and a target sum, return the indices of the two numbers that add up to the target.
  * Example:
  * twoSum([2, 7, 11, 15], 9) // [0, 1] 
  * twoSum([3, 2, 4], 6) // [1, 2]
  */

export function twoSum(arr: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(arr[i], i);
  }

  return [];
}

