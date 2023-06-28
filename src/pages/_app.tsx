import '../styles/globals.css';
import type {AppProps} from 'next/app';
import React from 'react';
import Layout from '../components/layout/Layout';
import {FavoritesProvider} from '../store/FavoritesContext';

export default function App({Component, pageProps}: AppProps) {
  return (
    <FavoritesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FavoritesProvider>
  );
}
