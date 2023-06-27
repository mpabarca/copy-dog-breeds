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
  const {list, breedName, showIcon, callImageAPI, shouldRedirect} = props;

  return (
    <>
      {list.map((breed, index) => (
        <DogCard
          key={`index-dogCard-${index}`}
          breedName={(breed || breedName) as string}
          showIcon={showIcon}
          callImageAPI={callImageAPI}
          shouldRedirect={shouldRedirect}
        />
      ))}
    </>
  );
};
export default BreedCardGallery;
