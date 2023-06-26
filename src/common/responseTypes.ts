export type ResponseRandomImageByBreed = {
  message: string;
  status: string;
};

export type ResponseListImagesByBreed = {
  message: string[];
  status: string;
};

export type BreedSubBreeds = {
  [breed: string]: string[];
};

export type ResponseListAllBreeds = {
  message: BreedSubBreeds;
  status: string;
};
