import {ResponseRandomImageByBreed} from '../../common/responseTypes';
import {getRandomImageByBreed} from './';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('getListImagesByBreed Test', () => {
  const breed = 'hound';

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should return getRandomImageByBreed success', async () => {
    const mockResponse: ResponseRandomImageByBreed = {
      message: 'https://images.dog.ceo/breeds/hound-blood/n02088466_3568.jpg',
      status: 'success',
    };

    fetchMock.mockResponse(JSON.stringify(mockResponse), {status: 200});

    const result = await getRandomImageByBreed(breed);
    expect(result).toEqual(mockResponse);
    expect(fetchMock).toHaveBeenCalledWith('https://dog.ceo/api/breed/hound/images/random');
  });

  it('should return getRandomImageByBreed error', async () => {
    const mockErrorResponse = {
      status: 'error',
      message: 'Internal Server Error',
    };
    fetchMock.mockRejectedValue({status: 500});
    let err;
    try {
      await getRandomImageByBreed(breed);
      expect(fetchMock).toHaveBeenCalledWith('https://dog.ceo/api/breed/hound/images/random');
      expect(await getRandomImageByBreed(breed)).toEqual(mockErrorResponse);
    } catch (error) {
      err = error;
    } finally {
      expect(err).toEqual({status: 500});
    }
  });
});
