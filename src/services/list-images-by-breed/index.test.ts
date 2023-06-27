import {ResponseListImagesByBreed} from '../../common/responseTypes';
import {getListImagesByBreed} from './';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('getListImagesByBreed Test', () => {
  const breed = 'hound';

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should return getListImagesByBreed success', async () => {
    const mockResponse: ResponseListImagesByBreed = {
      message: [
        'https://images.dog.ceo/breeds/hound-afghan/n02088094_3396.jpg',
        'https://images.dog.ceo/breeds/hound-blood/n02088466_7703.jpg',
        'https://images.dog.ceo/breeds/hound-ibizan/n02091244_2695.jpg',
        'https://images.dog.ceo/breeds/hound-afghan/n02088094_3396.jpg',
        'https://images.dog.ceo/breeds/hound-blood/n02088466_7703.jpg',
        'https://images.dog.ceo/breeds/hound-ibizan/n02091244_2695.jpg',
        'https://images.dog.ceo/breeds/hound-afghan/n02088094_3396.jpg',
        'https://images.dog.ceo/breeds/hound-blood/n02088466_7703.jpg',
        'https://images.dog.ceo/breeds/hound-ibizan/n02091244_2695.jpg',
        'https://images.dog.ceo/breeds/hound-afghan/n02088094_3396.jpg',
        'https://images.dog.ceo/breeds/hound-blood/n02088466_7703.jpg',
        'https://images.dog.ceo/breeds/hound-ibizan/n02091244_2695.jpg',
      ],
      status: 'success',
    };

    fetchMock.mockResponse(JSON.stringify(mockResponse), {status: 200});

    const result = await getListImagesByBreed(breed);
    expect(result).toEqual(mockResponse);
    expect(fetchMock).toHaveBeenCalledWith(`https://dog.ceo/api/breed/${breed}/images`);
  });

  it('should return getListImagesByBreed error', async () => {
    const mockErrorResponse = {
      status: 'error',
      message: 'Internal Server Error',
    };
    fetchMock.mockRejectedValue({status: 500});
    let err;
    try {
      await getListImagesByBreed(breed);
      expect(fetchMock).toHaveBeenCalledWith('https://dog.ceo/api/breed/hound/images/random/12');
      expect(await getListImagesByBreed(breed)).toEqual(mockErrorResponse);
    } catch (error) {
      err = error;
    } finally {
      expect(err).toEqual({status: 500});
    }
  });
});
