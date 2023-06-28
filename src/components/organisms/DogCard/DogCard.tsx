import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {ResponseRandomImageByBreed} from '../../../common/responseTypes';
import {getRandomImageByBreed} from '../../../services/random-image-by-breed';
import DogImage from '../../atoms/DogImage/DogImage';

export interface DogCardProps {
  breedName: string;
  imageUrl: string;
  showIcon: boolean;
  callImageAPI: boolean;
  shouldRedirect: boolean;
}

const DogCard: React.FC<DogCardProps> = (props: DogCardProps) => {
  const {breedName, imageUrl, showIcon, callImageAPI, shouldRedirect} = props;
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
    callImageAPI ? getData() : setBreedImage(imageUrl);
  }, [callImageAPI, imageUrl, breedName]);

  const redirectCard = (
    <Link type="button" href={`/breed/${breedName}`} data-testid="redirect-dog-card">
      <h1>{breedName}</h1>
      {status && <DogImage breedName={breedName} imageUrl={breedImage} />}
    </Link>
  );

  const iconCard = (
    <div data-testid="icon-dog-card">
      {showIcon && <button>Icon</button>}
      {status && <DogImage imageUrl={breedImage} />}
    </div>
  );

  return <>{shouldRedirect ? redirectCard : iconCard}</>;
};
export default DogCard;
