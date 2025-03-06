import { isPalindrome } from './index';

describe('isPalindrome', () => {
  test('Detects palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('level')).toBe(true);
    expect(isPalindrome('rotor')).toBe(true);
    expect(isPalindrome('noon')).toBe(true);
    expect(isPalindrome('refer')).toBe(true);
    expect(isPalindrome('deified')).toBe(true);
    expect(isPalindrome('civic')).toBe(true);
    expect(isPalindrome('php')).toBe(true);
  });

  test('Detects non-palindromes', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
    expect(isPalindrome('java')).toBe(false);
    expect(isPalindrome('javascript')).toBe(false);
    expect(isPalindrome('python')).toBe(false);
    expect(isPalindrome('csharp')).toBe(false);
    expect(isPalindrome('ruby')).toBe(false);
  });
}); 