import React from 'react';
import {act, render} from '@testing-library/react';
import BreedDetailPage from '../pages/breed/[breedName]';
import {getListImagesByBreed} from '../services/list-images-by-breed';

jest.mock('../services/list-images-by-breed', () => ({
  getListImagesByBreed: jest.fn().mockResolvedValue({
    message: [
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_10715.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_10822.jpg',
    ],
    status: 'success',
  }),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    query: {
      breedName: 'hound',
    },
  })),
}));

jest.mock('../components/template/BreedDetailTemplate/BreedDetailTemplate');

describe('BreedDetailPage test', () => {
  it('should render BreedDetailPage component', async () => {
    await act(async () => {
      const {container} = render(<BreedDetailPage />);
      expect(container).toBeTruthy();
    });
  });
  it('should call getListImagesByBreed service', async () => {
    await act(async () => {
      render(<BreedDetailPage />);
      expect(getListImagesByBreed).toHaveBeenCalled();
    });
  });
});
