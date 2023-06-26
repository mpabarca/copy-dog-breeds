import {ResponseListAllBreeds} from '../../common/responseTypes';
import {getListAllBreeds} from './';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('getListImagesByBreed Test', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should return getListAllBreeds success', async () => {
    const mockResponse: ResponseListAllBreeds = {
      message: {
        affenpinscher: [],
        african: [],
        australian: ['shepherd'],
      },
      status: 'success',
    };

    fetchMock.mockResponse(JSON.stringify(mockResponse), {status: 200});

    const result = await getListAllBreeds();
    expect(result).toEqual(mockResponse);
    expect(fetchMock).toHaveBeenCalledWith('https://dog.ceo/api/breeds/list/all');
  });

  it('should return getListAllBreeds error', async () => {
    const mockErrorResponse = {
      status: 'error',
      message: 'Internal Server Error',
    };
    fetchMock.mockRejectedValue({status: 500});
    let err;
    try {
      await getListAllBreeds();
      expect(fetchMock).toHaveBeenCalledWith('https://dog.ceo/api/breeds/list/all');
      expect(await getListAllBreeds()).toEqual(mockErrorResponse);
    } catch (error) {
      err = error;
    } finally {
      expect(err).toEqual({status: 500});
    }
  });
});
