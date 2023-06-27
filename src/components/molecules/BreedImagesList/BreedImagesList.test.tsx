import React from 'react';
import {act, render} from '@testing-library/react';
import BreedRandomImage, {BreedRandomImageProps} from './BreedImagesList';
import {getRandomImageByBreed} from '../../../services/random-image-by-breed';

jest.mock('../../../services/random-image-by-breed', () => ({
  getRandomImageByBreed: jest.fn().mockResolvedValue({
    message: 'https://dog.ceo/api/breed/hound/images/random',
  }),
}));

jest.mock('../../atoms/BreedImage/BreedImage');

describe('BreedRandomImage test', () => {
  const props: BreedRandomImageProps = {
    breedName: 'hound',
  };

  it('should render BreedRandomImage component', async () => {
    await act(async () => {
      const {container} = render(<BreedRandomImage {...props} />);
      expect(container).toBeTruthy();
    });
  });
  it('should render call getRandomImageByBreed service', async () => {
    await act(async () => {
      await render(<BreedRandomImage {...props} />);
    });
    expect(getRandomImageByBreed).toHaveBeenCalledWith(props.breedName);
  });
  // -> To do: Test when failed call and show some message
});
