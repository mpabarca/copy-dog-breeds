import React from 'react';
import {act, render} from '@testing-library/react';
import BreedDetailTemplate, {BreedDetailTemplateProps} from './BreedDetailTemplate';

jest.mock('../../organisms/BreedCardGallery/BreedCardGallery');

describe('BreedDetailTemplate test', () => {
  const props: BreedDetailTemplateProps = {
    breedName: 'hound',
    breedListImages: [
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_10715.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_10822.jpg',
    ],
  };

  it('should render BreedDetailTemplate component', async () => {
    await act(async () => {
      const {container} = render(<BreedDetailTemplate {...props} />);
      expect(container).toBeTruthy();
    });
  });
  // -> To do: Test when failed call and show some message
});
