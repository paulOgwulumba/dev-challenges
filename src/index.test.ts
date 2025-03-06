import { firstUniqueChar } from './index';

describe('firstUniqueChar', () => {
  test('Detects first unique character', () => {
    expect(firstUniqueChar('swiss')).toBe('w');
    expect(firstUniqueChar('hello')).toBe('h');
    expect(firstUniqueChar('badalandabad')).toBe('l');
  });

  test('Returns null for no unique character', () => {
    expect(firstUniqueChar('')).toBeNull();
    expect(firstUniqueChar('aabbcc')).toBeNull();
    expect(firstUniqueChar('fababbcdcddeeff')).toBeNull();
  });
}); 
