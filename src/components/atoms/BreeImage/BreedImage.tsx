import Image from 'next/image';
import React from 'react';

export interface BreedImageProps {
  breedName: string;
  imageUrl: string;
}

const BreedImage: React.FC<BreedImageProps> = ({breedName, imageUrl}) => {
  return (
    <>
      <Image width={100} height={100} src={imageUrl} alt={`Image of ${breedName} breed`} />
    </>
  );
};
export default BreedImage;
