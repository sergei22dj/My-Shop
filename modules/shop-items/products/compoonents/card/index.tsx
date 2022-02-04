import * as React from 'react';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle, ViewButton, CardName } from './views';
// view components
import { ProductLink } from '../product-link';

interface Props {
  id: string;
  name: string;
  url: string;
  price: number;
}

const Card: React.FC<Props> = ({ id, name, url, price }) => (
  <CardWrapper key={id}>
    <CardName>{name} </CardName>
    <CardImgWrapper>
      <CardImg src={url} alt={`${name}-${id}`} />
    </CardImgWrapper>
    <CardFooter>
      <ProductLink pId={id}>
        <ViewButton>Details</ViewButton>
      </ProductLink>
      <CardFooterTitle>{price}$</CardFooterTitle>
      <ViewButton> Add to cart</ViewButton>
    </CardFooter>
  </CardWrapper>
);

export { Card };
