import * as React from 'react';
import styles from '@md-modules/shared/styles/Home.module.css';
import { MainLayout } from '@md-modules/shared/layouts/main';
import ModalWrapper from '@md-modules/shop-items/modalPopUp/ModalWrapper';
// env example
// console.log(process.env.ANALYTICS_ID) for server side
// console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID) for client side
const Home = () => {
  const [modalVsion, setModalVision] = React.useState(false);
  const toggleModal = () => {
    setModalVision((wasModalVision) => !wasModalVision);
  };
  return (
    <MainLayout>
      <p className={styles.titleHome}>Hello, it's my shop</p>
      <ModalWrapper modalVsion={modalVsion} onBackdropClick={toggleModal} />
      <button onClick={toggleModal}>Open modal</button>
    </MainLayout>
  );
};

export default Home;
