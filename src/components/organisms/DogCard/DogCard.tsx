import Link from 'next/link';
import React, {useContext, useEffect, useState} from 'react';
import {ResponseRandomImageByBreed} from '../../../common/responseTypes';
import {getRandomImageByBreed} from '../../../services/random-image-by-breed';
import DogCardTemplate from '../../molecules/DogCardTemplate/DogCardTemplate';
import {ImageObjectType} from '../../../common/types';
import {initialImageObjectState} from '../../../common/initialState';
import {getBreedImageObject} from '../../../utils/helper';
import {FavoritesContext} from '../../../store/FavoritesContext';

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

  const {addFavorite, removeFavorite} = useContext(FavoritesContext);

  const [breedImageObject, setBreedImageObject] = useState<ImageObjectType>(initialImageObjectState);
  const [status, setStatus] = useState<boolean>(true);
  const [favoriteClickOn, setFavoriteClickOn] = useState(isFavorite)

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

  const handleAddFavorite = () => {
    addFavorite(breedImageObject);
  };

  const handleRemoveFavorite = () => {
    removeFavorite(breedImageObject);
  };

  useEffect(() => {
    callImageAPI ? getData() : setBreedImageObject(getBreedImageObject(imageUrl));
  }, [callImageAPI, imageUrl, breedName]);

  const handleClickFavoriteIcon = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('click on icon');
    console.log(breedImageObject);
    isFavorite ? handleRemoveFavorite() : handleAddFavorite();
  }

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
