import React, {useContext} from 'react';
import {FavoritesContext} from '../../../store/FavoritesContext';
import DogCard from '../DogCard/DogCard';
import { checkObjectInList, getBreedImageObject } from '../../../utils/helper';

export interface BreedCardGalleryProps {
  list: string[];
  breedName?: string;
  showIcon: boolean;
  callImageAPI: boolean;
  shouldRedirect: boolean;
}

const BreedCardGallery: React.FC<BreedCardGalleryProps> = (props: BreedCardGalleryProps) => {
  const {list, showIcon, callImageAPI, shouldRedirect, breedName = ''} = props;
  const {favorites} = useContext(FavoritesContext);

  return (
    <div className="w-full grid gap-20 auto-rows-fr grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center">
      {list.map((element, index) => {
        const isFavorite = !callImageAPI ? checkObjectInList(favorites, getBreedImageObject(element)) : false;
        return (
          <DogCard
            key={`index-dogCard-${index}`}
            showIcon={showIcon}
            callImageAPI={callImageAPI}
            shouldRedirect={shouldRedirect}
            imageUrl={callImageAPI ? '' : element}
            breedName={callImageAPI ? element : breedName}
            isFavorite={isFavorite}
          />
        );
      })}
    </div>
  );
};
export default BreedCardGallery;
