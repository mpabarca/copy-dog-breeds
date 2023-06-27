import React from 'react';
import DogCard from '../DogCard/DogCard';

export interface BreedCardGalleryProps {
  breedsList: string[];
}

const BreedCardGallery: React.FC<BreedCardGalleryProps> = ({breedsList}) => {
  return (
    <>
      {breedsList.map((breed, index) => (
        <DogCard
          key={`index-breeRandomImage-${index}`}
          breedName={breed}
          showIcon={false}
          callImageAPI={true}
          shouldRedirect={true}
        />
      ))}
    </>
  );
};
export default BreedCardGallery;
