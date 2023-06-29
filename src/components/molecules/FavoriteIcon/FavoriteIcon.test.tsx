import React from 'react';
import {act, render} from '@testing-library/react';
import FavoriteIcon, {FavoriteIconProps} from './FavoriteIcon';

describe('FavoriteIcon test', () => {
  const props: FavoriteIconProps = {
    isFavorite: true,
    handleClickFavoriteIcon: jest.fn(),
  };

  it('should render FavoriteIcon component and Fill Icon when isFavorite is true', async () => {
    await act(async () => {
      render(<FavoriteIcon {...props} />);
    });
    const iconElement = document.querySelector('[data-testid="fill-heart-icon"]');
    expect(iconElement).toBeTruthy();
  });
  it('should render FavoriteIcon component and Outline Icon when isFavorite is true', async () => {
    const isNotFavoriteProps: FavoriteIconProps = {
      ...props,
      isFavorite: false,
    };
    await act(async () => {
      render(<FavoriteIcon {...isNotFavoriteProps} />);
    });
    const iconElement = document.querySelector('[data-testid="outline-heart-icon"]');
    expect(iconElement).toBeTruthy();
  });
});
