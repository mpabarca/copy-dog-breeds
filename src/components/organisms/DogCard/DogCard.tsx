import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {ResponseRandomImageByBreed} from '../../../common/responseTypes';
import {getRandomImageByBreed} from '../../../services/random-image-by-breed';
import DogCardTemplate from '../../molecules/DogCardTemplate/DogCardTemplate';

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
    <Link
      type="button"
      href={`/breed/${breedName}`}
      data-testid="redirect-dog-card"
      className="flex h-full min-w-full mx-10"
    >
      <DogCardTemplate showIcon={showIcon} imageUrl={breedImage} breedName={breedName} showBreedName={true} />
    </Link>
  );

  const iconCard = (
    <div data-testid="icon-dog-card" className="flex -1 h-full max-w-xs">
      <DogCardTemplate showIcon={showIcon} imageUrl={breedImage} breedName={breedName} showBreedName={false} />
    </div>
  );

  return <>{shouldRedirect ? redirectCard : iconCard}</>;
};
export default DogCard;
