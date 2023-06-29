import React from 'react';
import {act, render, screen} from '@testing-library/react';
import DogCard, {DogCardProps} from './DogCard';
import {getRandomImageByBreed} from '../../../services/random-image-by-breed';
import {getBreedImageObject} from '../../../utils/helper';

jest.mock('../../../services/random-image-by-breed', () => ({
  getRandomImageByBreed: jest.fn().mockResolvedValue({
    message: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
  }),
}));
jest.mock('../../../utils/helper', () => ({
  getBreedImageObject: jest.fn().mockResolvedValue({
    idBreed: 'n02088094',
      idBreedImage: '1003',
      imageUrl: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
  }),
  capitalizeFirstLetter: jest.fn(),
}));

jest.mock('../../atoms/DogImage/DogImage');
jest.mock('../../molecules/DogCardTemplate/DogCardTemplate');

describe('DogCard test', () => {
  const props: DogCardProps = {
    breedName: 'hound',
    imageUrl: '',
    showIcon: false,
    callImageAPI: true,
    shouldRedirect: true,
    isFavorite: false,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render DogCard component', async () => {
    await act(async () => {
      const {container} = render(<DogCard {...props} />);
      expect(container).toBeTruthy();
    });
  });
  it('should render DogCard component with redirected card', async () => {
    await act(async () => {
      render(<DogCard {...props} />);
    });
    expect(screen.getByTestId('redirect-dog-card')).toBeInTheDocument();
  });
  it('should call getRandomImageByBreed service when callImageAPI is true', async () => {
    await act(async () => {
      await render(<DogCard {...props} />);
    });
    expect(getRandomImageByBreed).toHaveBeenCalledWith(props.breedName);
  });
  it('should render DogCard component with icon card', async () => {
    const iconProps: DogCardProps = {
      ...props,
      showIcon: true,
      callImageAPI: false,
      shouldRedirect: false,
    };
    await act(async () => {
      render(<DogCard {...iconProps} />);
    });
    expect(screen.getByTestId('icon-dog-card')).toBeInTheDocument();
  });

  it('should get Image Object when use getBreedImageObject function', async () => {
    await act(async () => {
      render(<DogCard {...props} />);
    });
    expect(getBreedImageObject).toHaveBeenCalledWith(
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg'
    );
  });
});
