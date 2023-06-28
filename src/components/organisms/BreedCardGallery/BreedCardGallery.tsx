import React from 'react';
import DogCard from '../DogCard/DogCard';

export interface BreedCardGalleryProps {
  list: string[];
  breedName?: string;
  showIcon: boolean;
  callImageAPI: boolean;
  shouldRedirect: boolean;
}

const BreedCardGallery: React.FC<BreedCardGalleryProps> = (props: BreedCardGalleryProps) => {
  const {list, showIcon, callImageAPI, shouldRedirect, breedName = ''} = props;
  return (
    <div className="w-full grid gap-10 auto-rows-fr grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center">
      {list.map((element, index) => (
        <DogCard
          key={`index-dogCard-${index}`}
          showIcon={showIcon}
          callImageAPI={callImageAPI}
          shouldRedirect={shouldRedirect}
          imageUrl={callImageAPI ? '' : element}
          breedName={callImageAPI ? element : breedName}
        />
      ))}
    </div>
  );
};
export default BreedCardGallery;
