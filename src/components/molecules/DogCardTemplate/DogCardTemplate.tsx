import React from 'react';
import DogImage from '../../atoms/DogImage/DogImage';
import {CardContainer} from './DogCardTemplate.style';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import {capitalizeFirstLetter} from '../../../utils/helper';

export interface DogCardTemplateProps {
  breedName: string;
  imageUrl: string;
  showIcon: boolean;
  showBreedName: boolean;
  isFavorite?: boolean;
  handleClickFavoriteIcon?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export type tailwindClassesCardType = {
  [key: string]: string;
};

const DogCardTemplate: React.FC<DogCardTemplateProps> = (props: DogCardTemplateProps) => {
  const {breedName, imageUrl, showIcon, showBreedName, isFavorite = false, handleClickFavoriteIcon} = props;

  return (
    <CardContainer className="flex-1 w-full text-s text-main-color-black bg-white flex flex-col border-2 border-secondary-color-gray-dark">
      <div className="flex items-center justify-end bg-white px-4 pt-4 ">
        {showBreedName && <span className="text-s font-regular">{capitalizeFirstLetter(breedName)}</span>}
        {showIcon && handleClickFavoriteIcon && <FavoriteIcon isFavorite={isFavorite} handleClickFavoriteIcon={handleClickFavoriteIcon} />}
      </div>
      <div className=" box-borders flex justify-center items-center p-4">
        <div className="relative overflow-hidden h-52 md:h-64 w-full">
          <DogImage imageUrl={imageUrl} />
        </div>
      </div>
    </CardContainer>
  );
};
export default DogCardTemplate;
