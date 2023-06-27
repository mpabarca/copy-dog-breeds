import React from 'react';
import {render, screen} from '@testing-library/react';
import DogImage, {DogImageProps} from './DogImage';

describe('DogImage test', () => {
  const props: DogImageProps = {
    breedName: 'hound',
    imageUrl: 'https://images.dog.ceo/breeds/hound-english/n02089973_289.jpg',
  };

  it('should render DogImage component', () => {
    const {container} = render(<DogImage {...props} />);
    expect(container).toBeTruthy();

    const imageElement = screen.getByAltText(`Image of ${props.breedName} breed`) as HTMLImageElement;
    expect(imageElement).toBeInTheDocument();
  });
});
