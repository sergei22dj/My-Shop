import * as React from 'react';
import styles from '@md-modules/shared/styles/Home.module.css';
import { MainLayout } from '@md-modules/shared/layouts/main';

// env example
// console.log(process.env.ANALYTICS_ID) for server side
// console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID) for client side
const Home = () => {
  return (
    <MainLayout>
      <p className={styles.titleHome}>Let's Start</p>
    </MainLayout>
  );
};

export default Home;
