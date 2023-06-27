import React from 'react';
import BreedCardGallery from '../../organisms/BreedCardGallery/BreedCardGallery';

type BreedTemplateProps = {
  breedName: string;
  breedListImages: string[];
};

const BreedTemplate: React.FC<BreedTemplateProps> = ({breedListImages, breedName}) => {
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
export default BreedTemplate;
