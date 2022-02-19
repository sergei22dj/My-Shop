import * as React from 'react';
// useContext
import { CardContext } from '@md-modules/shared/components/cart/layouts/bussines';
// view components
import { MenuItem } from '@md-ui/menu-items/main';
import { CartImg, Logo } from '@md-ui/logos/main';
// constants
import { menuItems } from './constants';
// views
import { Wrapper, IWrapper, LWrapper, RWrapper, CWrapper, Counter } from './views';

import ModalWrapper from '@md-modules/shared/components/cart/layouts/presentation';

const Header = () => {
  const { productList } = React.useContext(CardContext);

  const [modalVsion, setModalVision] = React.useState(false);

  let counter = 0;
  if (productList.length) {
    counter = productList.map((el) => el.count).reduce((sum, current) => sum + current);
  }

  const toggleModal = () => {
    setModalVision((wasModalVision) => !wasModalVision);
  };
  return (
    <Wrapper>
      <IWrapper>
        <LWrapper>
          <Logo />
        </LWrapper>
        <RWrapper>
          {menuItems.map(({ l, h }) => (
            <MenuItem key={l} href={h} label={l} />
          ))}
        </RWrapper>
        <ModalWrapper header='CART' modalVsion={modalVsion} onBackdropClick={toggleModal} deleted={0} />
        <div onClick={toggleModal}>
          <CWrapper>
            <Counter>{counter}</Counter>
            <CartImg />
          </CWrapper>
        </div>
      </IWrapper>
    </Wrapper>
  );
};

export { Header };
