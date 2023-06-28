import React from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

export interface FavoriteIconProps {
  isFavorite: boolean;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({isFavorite}) => {
  return (
    <button className='ml-4'>
      {isFavorite ? (
        <AiFillHeart data-testid="fill-heart-icon" size={28} className="font-bold text-main-color-orange hover:text-secondary-color-gray-light" />
      ) : (
        <AiOutlineHeart data-testid="outline-heart-icon" size={28} className="font-bold hover:text-main-color-orange" />
      )}
    </button>
  );
};
export default FavoriteIcon;
