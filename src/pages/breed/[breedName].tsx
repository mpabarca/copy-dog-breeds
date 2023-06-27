import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import BreedDetailTemplate from '../../components/template/BreedDetailTemplate/BreedDetailTemplate';
import {getListImagesByBreed} from '../../services/list-images-by-breed';
import {ResponseListImagesByBreed} from '../../common/responseTypes';

const BreedDetailPage: React.FC = () => {
  const router = useRouter();
  const breedName = router.query.breedName;

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
    breedName && getData();
  }, [breedName]);

  return <>{status && <BreedDetailTemplate breedName={breedName as string} breedListImages={breedListImages} />}</>;
};
export default BreedDetailPage;
