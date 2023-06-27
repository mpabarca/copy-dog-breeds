import React from 'react';
import {act, render} from '@testing-library/react';
import BreedCardGallery, {BreedCardGalleryProps} from './BreedCardGallery';
import {getRandomImageByBreed} from '../../../services/random-image-by-breed';

jest.mock('../../../services/random-image-by-breed', () => ({
  getRandomImageByBreed: jest.fn().mockResolvedValue({
    message: 'https://dog.ceo/api/breed/hound/images/random',
  }),
}));

jest.mock('../../atoms/BreedImage/BreedImage');

describe('BreedCardGallery test', () => {
  const props: BreedCardGalleryProps = {
    breedName: 'hound',
  };

  it('should render BreedCardGallery component', async () => {
    await act(async () => {
      const {container} = render(<BreedCardGallery {...props} />);
      expect(container).toBeTruthy();
    });
  });
  it('should render call getRandomImageByBreed service', async () => {
    await act(async () => {
      await render(<BreedCardGallery {...props} />);
    });
    expect(getRandomImageByBreed).toHaveBeenCalledWith(props.breedName);
  });
  // -> To do: Test when failed call and show some message
});
