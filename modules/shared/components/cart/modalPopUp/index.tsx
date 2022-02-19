import React from 'react';
// context
import { CardContext } from '@md-modules/shared/Contexts/cart';
// types
import { Product } from '@md-modules/shared/mock';
// components
import Modal from './Modal';
import { ViewButton } from '@md-modules/shop-items/products/compoonents/card/views';
// views
import {
  ButtonBar,
  DesktopModalContainer,
  HeaderModal,
  ActionButton,
  Wrapper,
  Img,
  Name,
  Description,
  NameWrapper,
  ProductsWrapper,
  ButtonsCard,
  CloseSign,
  CloseDesktop
} from './views';

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

interface ModalWrapperProps {
  onBackdropClick: () => void;
  modalVsion: boolean;
  header: string;
  deleted: number;
}

interface Props extends Product {
  incrementItem: (id: string) => void;
  decrementItem: (id: string, count?: number) => void;
}

const ProductCard: React.FC<Props> = ({ id, incrementItem, decrementItem, name, url, price, description, count }) => {
  const plus = () => incrementItem(id);

  const minus = () => decrementItem(id);

  const calcPrice = (count || 0) * price;

  return (
    <Wrapper>
      <Img src={url}></Img>
      <NameWrapper>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <ButtonsCard>
          <ViewButton onClick={minus}>-</ViewButton>
          {count}
          <ViewButton onClick={plus}>+</ViewButton>
          {numberWithCommas(calcPrice)} $
        </ButtonsCard>
      </NameWrapper>
    </Wrapper>
  );
};

const ModalWrapper: React.FC<ModalWrapperProps> = ({ onBackdropClick, modalVsion, header }) => {
  const { productList, setCardProducts } = React.useContext(CardContext);

  let totalPrice = 0;

  if (productList.length) {
    totalPrice = productList.map((el) => el.price * el.count).reduce((sum, current) => sum + current);
  }

  if (!modalVsion) {
    return null;
  }
  const deleted = productList.findIndex((item) => item.count === 0);
  if (deleted !== -1) {
    productList.splice(deleted, 1);
  }
  const incrementItem = (id: string) =>
    setCardProducts(productList.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item)));
  const decrementItem = (id: string) => {
    setCardProducts(productList.map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item)));
  };

  const products = productList.map((el, index) => (
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
  ));

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <DesktopModalContainer>
        <HeaderModal>
          <CloseDesktop onClick={onBackdropClick}>
            <CloseSign>X</CloseSign>
          </CloseDesktop>
          {header}
        </HeaderModal>

        <ProductsWrapper>{productList.length ? products : 'Cart is empty'}</ProductsWrapper>

        {productList.length && (
          <ButtonBar>
            <ActionButton>Continue Sopping</ActionButton>
            <ActionButton>Pay: {numberWithCommas(totalPrice)} $</ActionButton>
          </ButtonBar>
        )}
      </DesktopModalContainer>
    </Modal>
  );
};

export default ModalWrapper;
