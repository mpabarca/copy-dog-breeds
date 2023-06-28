import React from 'react';
import DogImage from '../../atoms/DogImage/DogImage';
import {CardContainer} from './DogCardTemplate.style';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';

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
      className="flex-1 w-full text-s text-main-color-black bg-white
        flex flex-col
        border-2 border-black"
    >
      <div className="flex items-center justify-end bg-main-color-pink p-4 ">
        {showBreedName && <span className="text-s font-regular">{breedName}</span>}
        {showIcon && <FavoriteIcon isFavorite={true} />}
      </div>
      <div className=" box-borders flex justify-center items-center p-4">
        <div className="relative object-cover overflow-hidden h-40 w-40 border-double border-8 border-secondary-color-black-500/75">
          <DogImage imageUrl={imageUrl} />
        </div>
      </div>
    </CardContainer>
  );
};
export default DogCardTemplate;
