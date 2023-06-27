import BreedImage, {BreedImageProps} from './BreedImage';
import {render, screen} from '@testing-library/react';
import React from 'react';

describe('BreedImage test', () => {
  const props: BreedImageProps = {
    breedName: 'hound',
    imageUrl: 'https://images.dog.ceo/breeds/hound-english/n02089973_289.jpg',
  };

  it('should render BreedImage component', () => {
    const {container} = render(<BreedImage {...props} />);
    expect(container).toBeTruthy();

    const imageElement = screen.getByAltText(`Image of ${props.breedName} breed`) as HTMLImageElement;
    expect(imageElement).toBeInTheDocument();
  });
});
