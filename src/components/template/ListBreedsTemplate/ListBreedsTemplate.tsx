import React, {useEffect, useState} from 'react';
import {getListAllBreeds} from '../../../services/list-all-breeds';
import {ResponseListAllBreeds} from '../../../common/responseTypes';
import BreedRandomImage from '../../molecules/BreedRandomImage/BreedRandomImage';

const ListBreedsTemplate: React.FC = () => {
  const [breedsList, setBreedsList] = useState<string[]>([]);
  const [status, setStatus] = useState<boolean>(true);

  const getData = async () => {
    try {
      const response: ResponseListAllBreeds = await getListAllBreeds();
      setBreedsList(Object.keys(response.message));
      setStatus(true);
    } catch (error) {
      console.error(error.message);
      setStatus(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {breedsList.map((breed, index) => {
        return <BreedRandomImage key={`index-breeRandomImage-${index}`} breedName={breed} />;
      })}
    </>
  );
};
export default ListBreedsTemplate;
