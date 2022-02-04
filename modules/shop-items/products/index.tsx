import * as React from 'react';
import { ProductsAPIContextProvider } from './layers/api/products';
import { ProductsBLContextProvider } from './layers/business';
import { ProductsPresentation } from './layers/presentation';

const ProductsContainer = () => (
  <>
    <ProductsAPIContextProvider>
      <ProductsBLContextProvider>
        <ProductsPresentation />
      </ProductsBLContextProvider>
    </ProductsAPIContextProvider>
  </>
);

export { ProductsContainer };
