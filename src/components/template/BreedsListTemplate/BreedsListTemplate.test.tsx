import React from 'react';
import {act, render} from '@testing-library/react';
import BreedsListTemplate, {BreedsListTemplateProps} from './BreedsListTemplate';

jest.mock('../../organisms/BreedCardGallery/BreedCardGallery');

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: jest.fn(),
  })),
}));

describe('BreedsListTemplate test', () => {
  const props: BreedsListTemplateProps = {
    breedsList: ['affenpinscher', 'african', 'airedale', 'akita'],
  };

  it('should render BreedsListTemplate component', async () => {
    await act(async () => {
      const {container} = render(<BreedsListTemplate {...props} />);
      expect(container).toBeTruthy();
    });
  });
  // -> To do: Test when failed call and show some message
});
