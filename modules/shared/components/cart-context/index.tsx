import React from 'react';
// types
import { Product } from '@md-modules/shared/mock';

interface Context {
  productList: Product[];
  setCardProducts: (product: Product[]) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  addToCart: (product: Product) => void;
}

export const CardContext = React.createContext<Context>({
  productList: [],
  setCardProducts: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
  addToCart: () => {}
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
  }, [productList]);
  
  const incrementItem = (id: string) =>
    setCardProducts(productList.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item)));

  const decrementItem = (id: string) =>
    setCardProducts(productList.map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item)).filter(item => item.count > 0));

  const setCardProducts = (products: Product[]) => setProduct(products);

  const addToCart = (product: Product) => {
    const idS = productList.map((el) => el.id);
    
    if (!idS.includes(product.id)) {
      setProduct((prevState) => [product, ...prevState]);
    } else {
      incrementItem(product.id);
    }
  };
  
  return (
    <CardContext.Provider value={{ productList, addToCart, setCardProducts, decrementItem, incrementItem }}>{children}</CardContext.Provider>
  );
};
export default CardContextProvider;