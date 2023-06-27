import React from 'react';
import BreedCardGallery from '../../organisms/BreedCardGallery/BreedCardGallery';

interface BreedsListTemplateProps {
  breedsList: string[];
}

const BreedsListTemplate: React.FC<BreedsListTemplateProps> = ({breedsList}) => {
  return (
    <>
      <BreedCardGallery breedsList={breedsList} />
    </>
  );
};
export default BreedsListTemplate;
