const {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters
} = require('../src/stringUtils');

describe('reverseString', () => {
  test('inverte stringa normale', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('inverte stringa con spazi', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('stringa vuota', () => {
    expect(reverseString('')).toBe('');
  });
});

describe('isPalindrome', () => {
  test('palindromo semplice', () => {
    expect(isPalindrome('anna')).toBe(true);
  });

  test('palindromo con spazi e maiuscole', () => {
    expect(isPalindrome('A nut for a jar of tuna')).toBe(true);
  });

  test('non palindromo', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('stringa vuota', () => {
    expect(isPalindrome('')).toBe(true);
  });
});

describe('truncateString', () => {
  test('tronca a lunghezza minore', () => {
    expect(truncateString('Hello', 3)).toBe('Hel...');
  });

  test('lunghezza uguale', () => {
    expect(truncateString('Hello', 5)).toBe('Hello');
  });

  test('lunghezza zero', () => {
    expect(truncateString('Hello', 0)).toBe('...');
  });
});

describe('countCharacters', () => {
  test('conteggio base', () => {
    expect(countCharacters('hello')).toEqual({
      h: 1,
      e: 1,
      l: 2,
      o: 1
    });
  });

  test('case sensitive', () => {
    expect(countCharacters('Hello')).toEqual({
      H: 1,
      e: 1,
      l: 2,
      o: 1
    });
  });

  test('caratteri speciali', () => {
    expect(countCharacters('!@#!')).toEqual({
      '!': 2,
      '@': 1,
      '#': 1
    });
  });
});