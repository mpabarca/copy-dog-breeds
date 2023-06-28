import React from 'react';
import {act, render} from '@testing-library/react';
import BreedCardGallery, {BreedCardGalleryProps} from './BreedCardGallery';

jest.mock('../../../services/random-image-by-breed', () => ({
  getRandomImageByBreed: jest.fn().mockResolvedValue({
    message: 'https://dog.ceo/api/breed/hound/images/random',
  }),
}));

jest.mock('../../organisms/DogCard/DogCard');

describe('BreedCardGallery test', () => {
  const listBreeds: string[] = ['affenpinscher', 'african', 'airedale', 'akita'];

  const props: BreedCardGalleryProps = {
    list: listBreeds,
    breedName: 'hound',
    showIcon: false,
    callImageAPI: true,
    shouldRedirect: true,
  };

  it('should render BreedCardGallery component', async () => {
    await act(async () => {
      const {container} = render(<BreedCardGallery {...props} />);
      expect(container).toBeTruthy();
    });
  });
  // -> To do: Test when failed call and show some message
});
