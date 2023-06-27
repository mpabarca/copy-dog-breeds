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
    <>
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
    </>
  );
};
export default BreedCardGallery;
