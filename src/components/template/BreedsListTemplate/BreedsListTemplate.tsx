import React from 'react';
import BreedCardGallery from '../../organisms/BreedCardGallery/BreedCardGallery';

interface BreedsListTemplateProps {
  breedsList: string[];
}

const BreedsListTemplate: React.FC<BreedsListTemplateProps> = ({breedsList}) => {
  return (
    <>
      <BreedCardGallery list={breedsList} showIcon={false} callImageAPI={true} shouldRedirect={true} />
    </>
  );
};
export default BreedsListTemplate;
