import * as React from 'react';
import { ProductAPIContext } from '../api/product';

interface ProductInfo {
  label: string;
  value: string | number;
}

interface Context {
  productInfo: ProductInfo[];
  productImgUrl: string[];
}

const ProductBLContext = React.createContext<Context>({
  productInfo: [],
  productImgUrl: []
});

const ProductBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { product } = React.useContext(ProductAPIContext);

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
        productImgUrl
      }}
    >
      {children}
    </ProductBLContext.Provider>
  );
};

export { ProductBLContextProvider, ProductBLContext };
