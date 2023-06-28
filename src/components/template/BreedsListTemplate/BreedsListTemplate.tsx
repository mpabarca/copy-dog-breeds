import React from 'react';
import BreedCardGallery from '../../organisms/BreedCardGallery/BreedCardGallery';
import Button from '../../atoms/Button/Button';
import {useRouter} from 'next/router';

export interface BreedsListTemplateProps {
  breedsList: string[];
}

const BreedsListTemplate: React.FC<BreedsListTemplateProps> = ({breedsList}) => {
  const router = useRouter();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push('/favorites');
  };

  return (
    <>
      <Button color="pink" text="To favorites page" handleOnClick={handleOnClick} />
      <BreedCardGallery list={breedsList} showIcon={false} callImageAPI={true} shouldRedirect={true} />
    </>
  );
};
export default BreedsListTemplate;
