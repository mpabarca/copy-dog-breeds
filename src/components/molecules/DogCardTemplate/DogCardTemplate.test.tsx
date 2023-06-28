import React from 'react';
import {act, render} from '@testing-library/react';
import DogCardTemplate, {DogCardTemplateProps} from './DogCardTemplate';

jest.mock('../../atoms/DogImage/DogImage');

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
});
