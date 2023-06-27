import React, {useEffect, useState} from 'react';
import BreedDetailTemplate from '../../components/template/BreedDetailTemplate/BreedDetailTemplate';
import {useRouter} from 'next/router';
import {getListImagesByBreed} from '../../services/list-images-by-breed';
import {ResponseListImagesByBreed} from '../../common/responseTypes';

const BreedDetail: React.FC = () => {
  const router = useRouter();
  const {breedName} = router.query;

  const [breedListImages, setBreedListImages] = useState<string[]>([]);
  const [status, setStatus] = useState<boolean>(true);

  const getData = async () => {
    try {
      const response: ResponseListImagesByBreed = await getListImagesByBreed(breedName as string);
      setBreedListImages(response.message);
      setStatus(true);
    } catch (error: any) {
      console.error(error instanceof Error ? error.message : error);
      setStatus(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <>{status && <BreedDetailTemplate breedListImages={breedListImages} breedName={breedName as string} />}</>;
};
export default BreedDetail;
