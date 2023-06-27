import Link from 'next/link';
import React from 'react';
import ListBreedsTemplate from '../../components/template/ListBreedsTemplate/ListBreedsTemplate';

const ListBreeds: React.FC = () => {
  return (
    <>
      <ListBreedsTemplate />
      <Link href={'/'}>
        <span> - To favorites list - </span>
      </Link>
    </>
  );
};
export default ListBreeds;
