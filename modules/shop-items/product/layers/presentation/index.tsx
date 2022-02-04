import * as React from 'react';
// context
import { ProductAPIContext } from '../api/product';
import { ProductBLContext } from '../business';
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

const ProductPresentation = () => {
  const { isLoading } = React.useContext(ProductAPIContext);
  const { productInfo, productImgUrl } = React.useContext(ProductBLContext);

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
              </ProductInfoContainer>
            </ProductDetailsContainer>
          </ProductInfoContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { ProductPresentation };
