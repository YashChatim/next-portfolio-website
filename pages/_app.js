import { Fragment } from 'react';

import MainHeader from '../components/layout/MainHeader';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <MainHeader />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp
