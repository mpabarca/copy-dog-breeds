import {capitalizeFirstLetter} from './helper';

describe('test capitalizeFirstLetter function', () => {
  it('should capitalize the first letter of a non-empty string', () => {
    const input = 'hello';
    const expectedOutput = 'Hello';
    const result = capitalizeFirstLetter(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty string for an empty input', () => {
    const input = '';
    const expectedOutput = '';
    const result = capitalizeFirstLetter(input);
    expect(result).toEqual(expectedOutput);
  });
});
