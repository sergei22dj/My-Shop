import * as React from 'react';
// context
import { ProductsAPIContext } from '../api/products';
// mock
import { Product } from '@md-modules/shared/mock';

interface Context {
  productsList: Product[];
}

const ProductsBLContext = React.createContext<Context>({
  productsList: []
});

const ProductsBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { products } = React.useContext(ProductsAPIContext);

  const productsList = React.useMemo<Product[]>(
    () => {
      if (!products) {
        return [];
      }

      return products.map(({ description, name, url, price, id, count }) => ({
        name,
        url,
        description,
        price,
        id,
        count
      }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [typeof products === 'undefined']
  );

  return (
    <ProductsBLContext.Provider
      value={{
        productsList
      }}
    >
      {children}
    </ProductsBLContext.Provider>
  );
};

export { ProductsBLContextProvider, ProductsBLContext };
