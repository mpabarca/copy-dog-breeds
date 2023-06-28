import React from 'react';
import BreedCardGallery from '../../organisms/BreedCardGallery/BreedCardGallery';

export type BreedDetailTemplateProps = {
  breedName: string;
  breedListImages: string[];
};

const BreedDetailTemplate: React.FC<BreedDetailTemplateProps> = ({breedListImages, breedName}) => {
  return (
    <>
      <BreedCardGallery
        list={breedListImages}
        breedName={breedName}
        showIcon={true}
        callImageAPI={false}
        shouldRedirect={false}
      />
    </>
  );
};
export default BreedDetailTemplate;
