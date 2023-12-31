import React, {useEffect, useState} from 'react';
import BreedsListTemplate from '../../components/template/BreedsListTemplate/BreedsListTemplate';
import {ResponseListAllBreeds} from '../../common/responseTypes';
import {getListAllBreeds} from '../../services/list-all-breeds';

const ListBreedsPage: React.FC = () => {
  const [breedsList, setBreedsList] = useState<string[]>([]);
  const [status, setStatus] = useState<boolean>(true);

  const getData = async () => {
    try {
      const response: ResponseListAllBreeds = await getListAllBreeds();
      setBreedsList(Object.keys(response.message));
      setStatus(true);
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
      setStatus(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return <>{status && <BreedsListTemplate breedsList={breedsList} />}</>;
};
export default ListBreedsPage;
