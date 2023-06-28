import React from 'react';
import {act, render} from '@testing-library/react';
import DogCardTemplate, {DogCardTemplateProps} from './DogCardTemplate';
import {capitalizeFirstLetter} from '../../../utils/helper';

jest.mock('../../atoms/DogImage/DogImage');
jest.mock('../FavoriteIcon/FavoriteIcon');
jest.mock('../../../utils/helper', () => ({
  capitalizeFirstLetter: jest.fn(),
}));

describe('DogCardTemplate test', () => {
  const props: DogCardTemplateProps = {
    breedName: 'hound',
    imageUrl: '',
    showIcon: false,
    showBreedName: false,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render DogCardTemplate component', async () => {
    await act(async () => {
      const {container} = render(<DogCardTemplate {...props} />);
      expect(container).toBeTruthy();
    });
  });
  it('should capitalize the breed name when showBreedName is true', async () => {
    const capitalizeFirstLetterMock = capitalizeFirstLetter as jest.Mock;
    capitalizeFirstLetterMock.mockReturnValue('Hound');
    await act(async () => {
      render(<DogCardTemplate {...props} showBreedName={true} />);
    });
    expect(capitalizeFirstLetterMock).toHaveBeenCalledWith('hound');
  });
});
