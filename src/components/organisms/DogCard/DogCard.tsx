import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {ResponseRandomImageByBreed} from '../../../common/responseTypes';
import {getRandomImageByBreed} from '../../../services/random-image-by-breed';
import DogCardTemplate from '../../molecules/DogCardTemplate/DogCardTemplate';
import {ImageObjectType} from '../../../common/types';
import {initialImageObjectState} from '../../../common/initialState';
import {getBreedImageObject} from '../../../utils/helper';

export interface DogCardProps {
  breedName: string;
  imageUrl: string;
  showIcon: boolean;
  callImageAPI: boolean;
  shouldRedirect: boolean;
  isFavorite: boolean;
}

const DogCard: React.FC<DogCardProps> = (props: DogCardProps) => {
  const {breedName, imageUrl, showIcon, callImageAPI, shouldRedirect, isFavorite} = props;
  const [breedImageObject, setBreedImageObject] = useState<ImageObjectType>(initialImageObjectState);
  const [status, setStatus] = useState<boolean>(true);

  const getData = async () => {
    try {
      const response: ResponseRandomImageByBreed = await getRandomImageByBreed(breedName);
      setBreedImageObject(getBreedImageObject(response.message));
      setStatus(true);
    } catch (error: any) {
      console.error(error instanceof Error ? error.message : error);
      setStatus(false);
    }
  };

  const handleClickFavoriteIcon = () => {};

  useEffect(() => {
    callImageAPI ? getData() : setBreedImageObject(getBreedImageObject(imageUrl));
  }, [callImageAPI, imageUrl, breedName]);

  const redirectCard = (
    <Link
      type="button"
      href={`/breed/${breedName}`}
      data-testid="redirect-dog-card"
      className="flex h-full min-w-full mx-10"
    >
      <DogCardTemplate
        showIcon={showIcon}
        imageUrl={breedImageObject.imageUrl}
        breedName={breedName}
        showBreedName={true}
      />
    </Link>
  );

  const iconCard = (
    <div data-testid="icon-dog-card" className="flex h-full min-w-full mx-10">
      <DogCardTemplate
        showIcon={showIcon}
        imageUrl={breedImageObject.imageUrl}
        breedName={breedName}
        showBreedName={false}
        isFavorite={isFavorite}
        handleClickFavoriteIcon={handleClickFavoriteIcon}
      />
    </div>
  );

  return <>{shouldRedirect ? redirectCard : iconCard}</>;
};
export default DogCard;
