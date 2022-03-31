import * as React from 'react';
// context
import { CardContext } from '@md-modules/shared/components/cart-context';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle, ViewButton, CardName } from './views';
// view components
import { ProductLink } from '../product-link';
import { Product } from '@md-modules/shared/mock';

interface Props {
  product: Product;
 
}

const Card: React.FC<Props> = ({ product }) => {
  const { addToCart } = React.useContext(CardContext);

  const addProductToCart = () => addToCart(product);

  return (
    <CardWrapper key={product.id}>
      <CardName>{product.name} </CardName>
      <CardImgWrapper>
        <CardImg src={product.url} alt={`${product.name}-${product.id}`} />
      </CardImgWrapper>
      <CardFooter>
        <ProductLink pId={product.id}>
          <ViewButton>Details</ViewButton>
        </ProductLink>
        <CardFooterTitle>{product.price} $</CardFooterTitle>
        <ViewButton onClick={addProductToCart}>Add to cart</ViewButton>
      </CardFooter>
    </CardWrapper>
  );
};

export { Card };
