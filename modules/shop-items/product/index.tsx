import * as React from 'react';
import { ProductPresentation } from './layers/presentation';
import { ProductAPIContextProvider } from './layers/api/product';
import { ProductBLContextProvider } from './layers/business';

const ProductContainer = () => (
  <ProductAPIContextProvider>
    <ProductBLContextProvider>
      <ProductPresentation />
    </ProductBLContextProvider>
  </ProductAPIContextProvider>
);

export { ProductContainer };
