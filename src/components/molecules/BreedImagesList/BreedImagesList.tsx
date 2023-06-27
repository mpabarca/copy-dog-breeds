import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {ResponseRandomImageByBreed} from '../../../common/responseTypes';
import {getRandomImageByBreed} from '../../../services/random-image-by-breed';
import BreedImage from '../../atoms/DogImage/DogImage';

export interface BreedRandomImageProps {
  breedName: string;
}

const BreedRandomImage: React.FC<BreedRandomImageProps> = ({breedName}) => {
  const [breedImage, setBreedImage] = useState<string>('');
  const [status, setStatus] = useState<boolean>(true);

  const getData = async () => {
    try {
      const response: ResponseRandomImageByBreed = await getRandomImageByBreed(breedName);
      setBreedImage(response.message);
      setStatus(true);
    } catch (error: any) {
      console.error(error instanceof Error ? error.message : error);
      setStatus(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Link type="button" href={`/breed/${breedName}`}>
      <h1>{breedName}</h1>
      {status && <BreedImage breedName={breedName} imageUrl={breedImage} />}
    </Link>
  );
};
export default BreedRandomImage;
