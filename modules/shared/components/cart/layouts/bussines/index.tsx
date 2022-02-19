import React from 'react';
// types
import { Product } from '@md-modules/shared/mock';

interface Context {
  productList: Product[];
  setCardProduct: (product: Product) => void;
  setCardProducts: (product: Product[]) => void;
}

export const CardContext = React.createContext<Context>({
  productList: [],
  setCardProduct: () => {},
  setCardProducts: () => {}
});

const CardContextProvider: React.FC = ({ children }) => {
  const [productList, setProduct] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const data = window.localStorage.getItem('cart');
    if (data) {
      setProduct(JSON.parse(data));
    }
  }, []);
  React.useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(productList));
  });
  const setCardProducts = (products: Product[]) => setProduct(products);
  const setCardProduct = (product: Product) => setProduct((prevState) => [product, ...prevState]);

  return (
    <CardContext.Provider value={{ productList, setCardProduct, setCardProducts }}>{children}</CardContext.Provider>
  );
};
export default CardContextProvider;
