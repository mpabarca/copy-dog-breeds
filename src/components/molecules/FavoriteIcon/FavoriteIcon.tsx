import React from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

export interface FavoriteIconProps {
  isFavorite: boolean;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({isFavorite}) => {
  return (
    <>
      {isFavorite ? (
        <AiFillHeart data-testid="fill-heart-icon" size={28} className="ml-4 font-bold text-main-color-orange" />
      ) : (
        <AiOutlineHeart data-testid="outline-heart-icon" size={28} className="ml-4 font-bold" />
      )}
    </>
  );
};
export default FavoriteIcon;
