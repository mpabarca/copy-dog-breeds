import BreedRandomImag, {BreedRandomImageProps} from './BreedRandomImage';
import {render} from '@testing-library/react';
import React from 'react';

describe('BreedRandomImag test', () => {
  const props: BreedRandomImageProps = {
    breedName: 'hound',
  };

  it('should render BreedRandomImag component', () => {
    const {container} = render(<BreedRandomImag {...props} />);
    expect(container).toBeTruthy();
  });
});
