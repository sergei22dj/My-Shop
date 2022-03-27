import React from 'react';

// context
import { CardContext } from '@md-modules/shared/components/cart/layouts/bussines';

// assist
import { numberWithCommas } from '../../assistants';

// components
import Modal from '../../modal';
import { ProductCard } from '../../product-card';

// views
import {
  ButtonBar,
  DesktopModalContainer,
  HeaderModal,
  ActionButton,
  ProductsWrapper,
  CloseSign,
  CloseDesktop,
  Empty
} from './views';

interface ModalWrapperProps {
  onBackdropClick: () => void;
  modalVsion: boolean;
  header: string;
  deleted: number;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ onBackdropClick, modalVsion, header }) => {
  const { productList, incrementItem, decrementItem} = React.useContext(CardContext);

  let totalPrice = 0;

  if (productList.length) {
    totalPrice = productList.map((el) => el.price * el.count).reduce((sum, current) => sum + current);
  }

  if (!modalVsion) {
    return null;
  }

    return (productList.length !== 0) ? (
      <Modal onBackdropClick={onBackdropClick}>
        <HeaderModal>
            {header}
            <CloseDesktop onClick={onBackdropClick}>
            <CloseSign>X</CloseSign>
        </CloseDesktop>
          </HeaderModal>
        <DesktopModalContainer>
          <ProductsWrapper>{productList.map((el, index) => (
            <ProductCard
              key={index}
              id={el.id}
              url={el.url}
              name={el.name}
              price={el.price}
              count={el.count}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
              description={el.description}
            />
          ))}</ProductsWrapper>
        </DesktopModalContainer>
        <ButtonBar>
            <ActionButton onClick={onBackdropClick}>Continue Sopping</ActionButton>
            <ActionButton>Pay: <br /> {numberWithCommas(totalPrice)}$</ActionButton>
          </ButtonBar>
      </Modal>
    ) : (
      <Modal onBackdropClick={onBackdropClick}>
        <HeaderModal>
            {header}
             <CloseDesktop onClick={onBackdropClick}>
              <CloseSign>X</CloseSign>
            </CloseDesktop>
          </HeaderModal>
      <DesktopModalContainer>
        <Empty>Sorry, Your Cart Is Empty</Empty>
        </DesktopModalContainer>
         <ButtonBar>
            <ActionButton onClick={onBackdropClick}>Continue Sopping</ActionButton>

          </ButtonBar>
      </Modal>
    )
  } 
  

export default ModalWrapper;
