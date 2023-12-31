import React, {ReactNode, useEffect} from 'react';
import {ImageObjectType} from '../common/types';

interface FavoritesContextType {
  favorites: ImageObjectType[];
  addFavorite: (favorite: ImageObjectType) => void;
  removeFavorite: (favorite: ImageObjectType) => void;
}

export interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesContext = React.createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({children}) => {
  const [favorites, setFavorites] = React.useState<ImageObjectType[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (newFavorite: ImageObjectType) => {
    setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
  };

  const removeFavorite = (favorite: ImageObjectType) => {
    setFavorites((prevFavorites) => prevFavorites.filter(
      (element: ImageObjectType) =>
        element.idBreed !== favorite.idBreed && element.idBreedImage !== favorite.idBreedImage
    ));
  };

  const contextValue: FavoritesContextType = {
    favorites,
    addFavorite,
    removeFavorite,
  };

  return <FavoritesContext.Provider value={contextValue}>{children}</FavoritesContext.Provider>;
};
