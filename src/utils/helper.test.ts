import { ImageObjectType } from '../common/types';
import {capitalizeFirstLetter, getBreedImageObject, checkObjectInList} from './helper';

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

describe('test checkObjectInList function', () => {
  const list: ImageObjectType[] = [
    {
      idBreed: 'n02088094',
      idBreedImage: '1003',
      imageUrl: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
    },
    {
      idBreed: 'n02088094',
      idBreedImage: '10263',
      imageUrl: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg',
    },
    {
    idBreed: 'n02088238',
    idBreedImage: '12966',
    imageUrl: 'https://images.dog.ceo/breeds/hound-basset/n02088238_12966.jpg',
    },
  ];
  it('should return true when the object is in the array', () => {
    const elementTocheck = {
      idBreed: 'n02088094',
      idBreedImage: '10263',
      imageUrl: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg',
    };
    expect(checkObjectInList(list, elementTocheck)).toEqual(true);
  });
  it('should return false when the object is not in the array', () => {
    const elementTocheck = {
      idBreed: 'n02088000',
      idBreedImage: '100000',
      imageUrl: 'https://images.dog.ceo/breeds/hound-afghan/n02088000_100000.jpg',
    };
    expect(checkObjectInList(list, elementTocheck)).toEqual(false);
  });
});
