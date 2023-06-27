import Image from 'next/image';
import React from 'react';

export interface DogImageProps {
  breedName?: string;
  imageUrl: string;
}

const DogImage: React.FC<DogImageProps> = ({breedName, imageUrl}) => {
  return <>{imageUrl && <Image width={100} height={100} src={imageUrl} alt={`Image of ${breedName} breed`} />}</>;
};
export default DogImage;
