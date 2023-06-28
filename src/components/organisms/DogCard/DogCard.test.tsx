import React from 'react';
import {act, render} from '@testing-library/react';
import DogCard, {DogCardProps} from './DogCard';
import {getRandomImageByBreed} from '../../../services/random-image-by-breed';

jest.mock('../../../services/random-image-by-breed', () => ({
  getRandomImageByBreed: jest.fn().mockResolvedValue({
    message: 'https://dog.ceo/api/breed/hound/images/random',
  }),
}));

jest.mock('../../atoms/DogImage/DogImage');

describe('DogCard test', () => {
  const props: DogCardProps = {
    breedName: 'hound',
    imageUrl: '',
    showIcon: false,
    callImageAPI: true,
    shouldRedirect: true,
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
    const redirectCardElement = document.querySelector('[data-testid="redirect-dog-card"]');
    expect(redirectCardElement).toBeTruthy();
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

    const iconCardElement = document.querySelector('[data-testid="icon-dog-card"]');
    expect(iconCardElement).toBeTruthy();
  });

  it('should call getRandomImageByBreed service when callImageAPI is true', async () => {
    await act(async () => {
      await render(<DogCard {...props} />);
    });

    expect(getRandomImageByBreed).toHaveBeenCalledWith(props.breedName);
  });

  // TODO: Test when failed call and show some message
});
