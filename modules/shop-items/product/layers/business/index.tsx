import { Product } from '@md-modules/shared/mock';
import { ProductsAPIContext } from '@md-modules/shop-items/products/layers/api/products';
import * as React from 'react';
import { ProductAPIContext } from '../api/product';

interface ProductInfo {
  label: string;
  value: string | number;
}

interface Context {
  productInfo: ProductInfo[];
  productImgUrl: string[];
  productsList: Product[];
}

const ProductBLContext = React.createContext<Context>({
  productInfo: [],
  productImgUrl: [],
  productsList: []
});

const ProductBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { product } = React.useContext(ProductAPIContext);
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
  const productImgUrl = React.useMemo<string[]>(() => {
    if (!product) {
      return [];
    }

    return [product.url];
  }, [product]);

  const productInfo = React.useMemo<ProductInfo[]>(
    () => {
      if (!product) {
        return [];
      }

      return [
        { label: 'Название', value: product.name },
        { label: 'Описание', value: product.description },
        { label: 'Цена', value: product.price + '$' }
      ];
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [typeof product === 'undefined']
  );

  return (
    <ProductBLContext.Provider
      value={{
        productInfo,
        productImgUrl,
        productsList
      }}
    >
      {children}
    </ProductBLContext.Provider>
  );
};

export { ProductBLContextProvider, ProductBLContext };
