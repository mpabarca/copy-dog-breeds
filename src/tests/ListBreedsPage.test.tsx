import React from 'react';
import {act, render} from '@testing-library/react';
import ListBreedsPage from '../pages/show-all-breeds/index';
import {getListAllBreeds} from '../services/list-all-breeds';

jest.mock('../services/list-all-breeds', () => ({
  getListAllBreeds: jest.fn().mockResolvedValue({
    message: {
      affenpinscher: [],
      african: [],
      airedale: [],
      akita: [],
      appenzeller: [],
      australian: ['shepherd'],
    },
    status: 'success',
  }),
}));

jest.mock('../components/template/BreedsListTemplate/BreedsListTemplate');

describe('ListBreedsPage test', () => {
  it('should render ListBreedsPage component', async () => {
    await act(async () => {
      const {container} = render(<ListBreedsPage />);
      expect(container).toBeTruthy();
    });
  });
  it('should call getListAllBreeds service', async () => {
    await act(async () => {
      render(<ListBreedsPage />);
      expect(getListAllBreeds).toHaveBeenCalled();
    });
  });
});
