import React from 'react';
import {act, render} from '@testing-library/react';
import DogCard, {DogCardProps} from './DogCard';
import {getRandomImageByBreed} from '../../../services/random-image-by-breed';

jest.mock('../../../services/random-image-by-breed', () => ({
  getRandomImageByBreed: jest.fn().mockResolvedValue({
    message: 'https://dog.ceo/api/breed/hound/images/random',
  }),
}));

jest.mock('../../atoms/BreedImage/BreedImage');

describe('DogCard test', () => {
  const props: DogCardProps = {
    breedName: 'hound',
  };

  it('should render DogCard component', async () => {
    await act(async () => {
      const {container} = render(<DogCard {...props} />);
      expect(container).toBeTruthy();
    });
  });
  it('should render call getRandomImageByBreed service', async () => {
    await act(async () => {
      await render(<DogCard {...props} />);
    });
    expect(getRandomImageByBreed).toHaveBeenCalledWith(props.breedName);
  });
  // -> To do: Test when failed call and show some message
});
