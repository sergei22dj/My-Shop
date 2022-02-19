import * as React from 'react';
// context
import { ProductAPIContext } from '../api/product';
import { ProductBLContext } from '../business';
import { CardContext } from '@md-modules/shared/Contexts/cart';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { ProductInfo } from '../../components/product-info';
// views
import {
  ContentWrapper,
  ProductDetailsContainer,
  ProductImgContainer,
  ProductImg,
  ProductInfoContainer,
  ProductName,
  Wrapper,
  ProductBackButton
} from './views';
import Link from 'next/link';
import { BackImg } from '@md-modules/shared/components/ui/logos/main';

import { ViewButton } from '@md-modules/shop-items/products/compoonents/card/views';

interface Props {
  id: string;
  name: string;
  url: string;
  price: number;
  count?: number;
  description: string;
}

const ProductPresentation: React.FC<Props> = () => {
  const { isLoading, product } = React.useContext(ProductAPIContext);
  const { productInfo, productImgUrl } = React.useContext(ProductBLContext);
  const { setCardProduct, productList, setCardProducts } = React.useContext(CardContext);

  const idS = productList.map((el) => el.id);

  const addToCart = () => {
    if (!idS.includes(product!.id)) {
      setCardProduct(product!);
    } else {
      setCardProducts(productList.map((item) => (item.id === product?.id ? { ...item, count: item.count + 1 } : item)));
    }
  };

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading}>
          <Link href='/products' passHref>
            <ProductBackButton>
              <BackImg />
              Back
            </ProductBackButton>
          </Link>
          <ProductInfoContainer>
            <ProductImgContainer>
              <ProductImg src={productImgUrl.toString()} />
            </ProductImgContainer>
            <ProductDetailsContainer>
              <ProductName>Описание товара:</ProductName>
              <ProductInfoContainer>
                {productInfo.map((i, idx) => (
                  <ProductInfo key={idx} {...i} />
                ))}
                <ViewButton onClick={addToCart}>Add to cart</ViewButton>
              </ProductInfoContainer>
            </ProductDetailsContainer>
          </ProductInfoContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { ProductPresentation };
