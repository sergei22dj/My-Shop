import * as React from 'react';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { Card } from '../../compoonents/card';
// context
import { ProductsAPIContext } from '../api/products';
import { ProductsBLContext } from '../business';
// views
import { Wrapper } from './views';

const ProductsPresentation = () => {
  const { isLoading } = React.useContext(ProductsAPIContext);
  const { productsList } = React.useContext(ProductsBLContext);

  return (
    <Wrapper>
      <ContentLoader isLoading={isLoading}>
        {productsList.map((product) => (
          <Card url={''} price={0} {...product} key={product.id} />
        ))}
      </ContentLoader>
    </Wrapper>
  );
};

export { ProductsPresentation };
