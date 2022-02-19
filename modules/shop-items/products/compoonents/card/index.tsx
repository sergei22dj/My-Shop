import * as React from 'react';
// context
import { CardContext } from '@md-modules/shared/components/cart/layouts/bussines';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle, ViewButton, CardName } from './views';
// view components
import { ProductLink } from '../product-link';

interface Props {
  id: string;
  name: string;
  url: string;
  price: number;
  count: number;
  description: string;
}

const Card: React.FC<Props> = ({ id, name, url, price, description, count }) => {
  const { setCardProduct, productList, setCardProducts } = React.useContext(CardContext);

  const idS = productList.map((el) => el.id);

  const addToCart = () => {
    if (!idS.includes(id)) {
      setCardProduct({ name, url, price, id, description, count });
    } else {
      setCardProducts(productList.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item)));
    }
  };
  return (
    <CardWrapper key={id}>
      <CardName>{name} </CardName>
      <CardImgWrapper>
        <CardImg src={url} alt={`${name}-${id}`} />
      </CardImgWrapper>
      <CardFooter>
        <ProductLink pId={id}>
          <ViewButton>Details</ViewButton>
        </ProductLink>
        <CardFooterTitle>{price} $</CardFooterTitle>
        <ViewButton onClick={addToCart}>Add to cart</ViewButton>
      </CardFooter>
    </CardWrapper>
  );
};

export { Card };
