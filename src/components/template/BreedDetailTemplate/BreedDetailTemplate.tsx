import React from 'react';

type BreedTemplateProps = {
  breedName: string;
};

const BreedTemplate: React.FC<BreedTemplateProps> = ({breedName}) => {
  const [breedImage, setBreedImage] = useState<string>('');
  const [status, setStatus] = useState<boolean>(true);

  const getData = async () => {
    try {
      const response: ResponseRandomImageByBreed = await getRandomImageByBreed(breedName);
      setBreedImage(response.message);
      setStatus(true);
    } catch (error: any) {
      console.error(error instanceof Error ? error.message : error);
      setStatus(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>{breedName}</h2>
      <span>En template</span>
    </div>
  );
};
export default BreedTemplate;
