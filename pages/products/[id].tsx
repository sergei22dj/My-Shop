import * as React from 'react';
import { MainLayout } from '@md-modules/shared/layouts/main';
import { ProductContainer } from '@md-modules/shop-items/product';

const ProductPage = () => {
  return (
    <MainLayout>
      <ProductContainer />
    </MainLayout>
  );
};

export default ProductPage;
