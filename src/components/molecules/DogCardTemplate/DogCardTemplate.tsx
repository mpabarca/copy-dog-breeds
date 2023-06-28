import React from 'react';
import DogImage from '../../atoms/DogImage/DogImage';
import {CardContainer} from './DogCardTemplate.style';

export interface DogCardTemplateProps {
  breedName: string;
  imageUrl: string;
  showIcon: boolean;
  showBreedName: boolean;
}
export type tailwindClassesCardType = {
  [key: string]: string;
};

const DogCardTemplate: React.FC<DogCardTemplateProps> = (props: DogCardTemplateProps) => {
  const {breedName, imageUrl, showIcon, showBreedName} = props;

  return (
    <CardContainer
      className="flex-1 w-full text-s text-main-color-black bg-main-color-pink
        flex flex-col
        border-2 border-black py-6 px-4"
    >
      <div className="flex items-center justify-between mb-4 ">
        {showBreedName && <span className="text-s font-regular">{breedName}</span>}
        {showIcon && <button className="bg-gray-200 px-3 py-1 rounded-lg">Icon</button>}
      </div>
      <DogImage imageUrl={imageUrl} />
    </CardContainer>
  );
};
export default DogCardTemplate;
