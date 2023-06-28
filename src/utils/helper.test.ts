import {capitalizeFirstLetter, getBreedImageObject} from './helper';

describe('test capitalizeFirstLetter function', () => {
  it('should capitalize the first letter of a non-empty string', () => {
    const input = 'hello';
    const expectedOutput = 'Hello';
    expect(capitalizeFirstLetter(input)).toEqual(expectedOutput);
  });

  it('should return an empty string for an empty input', () => {
    const input = '';
    const expectedOutput = '';
    expect(capitalizeFirstLetter(input)).toEqual(expectedOutput);
  });
});

describe('test getBreedImageObject function', () => {
  const imageUrl = 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg';
  it('should return the correct breed image object', () => {
    const expectedObject = {
      idBreed: 'n02088094',
      idBreedImage: '1003',
      imageUrl: imageUrl,
    };
    expect(getBreedImageObject(imageUrl)).toEqual(expectedObject);
  });
});
