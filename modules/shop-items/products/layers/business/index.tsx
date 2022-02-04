import * as React from 'react';
// context
import { ProductsAPIContext } from '../api/products';
// mock
import { Product } from '@md-modules/shared/mock';

interface Context {
  productsList: Pick<Product, 'id' | 'name'>[];
}

const ProductsBLContext = React.createContext<Context>({
  productsList: []
});

const ProductsBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { products } = React.useContext(ProductsAPIContext);

  const productsList = React.useMemo<Pick<Product, 'id' | 'name'>[]>(
    () => {
      if (!products) {
        return [];
      }

      return products.map(({ description, name, url, price, id }) => ({
        name,
        url,
        description,
        price,
        id
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
