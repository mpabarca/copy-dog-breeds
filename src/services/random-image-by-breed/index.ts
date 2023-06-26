import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig();
const {URL_DOG_API} = publicRuntimeConfig;

export const getRandomImageByBreed = async (breed: string) => {
  try {
    const endpoint = `${URL_DOG_API}/breed/${breed}/images/random`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error instanceof Error ? error.message : error);
    throw error;
  }
};
