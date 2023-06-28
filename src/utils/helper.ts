import {ImageObjectType} from '../common/types';
import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig();
const {URL_IMAGES_DOG_API} = publicRuntimeConfig;

export const capitalizeFirstLetter = (str: string): string => {
  if (str.length === 0) return str;
  const firstLetter = str.charAt(0).toUpperCase();
  const restOfStr = str.slice(1);

  return firstLetter + restOfStr;
};

export const getBreedImageObject = (imageUrl: string): ImageObjectType => {
  const relativeImagePath: string[] = imageUrl.replace(URL_IMAGES_DOG_API, '').split('/');
  const arrayId: string[] = (relativeImagePath.find((element) => element.includes('.jpg')) as string)
    .replace('.jpg', '')
    .split('_');
  return {idBreed: arrayId[0], idBreedImage: arrayId[1], imageUrl: imageUrl};
};
