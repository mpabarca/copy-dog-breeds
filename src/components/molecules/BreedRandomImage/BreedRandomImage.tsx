import React from 'react';

export interface BreedRandomImageProps {
  breedName: string;
}

const BreedRandomImage: React.FC<BreedRandomImageProps> = ({breedName}) => {
  return <div>{breedName}</div>;
};
export default BreedRandomImage;
