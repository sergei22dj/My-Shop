// types
import { Product } from '@md-modules/shared/mock';
// views
import { ViewButton } from '@md-modules/shop-items/products/compoonents/card/views';
import { ButtonsCard, Description, Img, Name, NameWrapper, Wrapper } from './views';
// helpers
import { numberWithCommas } from '../../assistants';

interface Props extends Product {
    incrementItem: (id: string) => void;
    decrementItem: (id: string, count?: number) => void;
  }
  
  export const ProductCard: React.FC<Props> = ({ id, incrementItem, decrementItem, name, url, price, description, count }) => {
    const plus = () => incrementItem(id);
  
    const minus = () => decrementItem(id);
  
    const calcPrice = (count || 0) * price;
  
    return (
      <Wrapper>
        <Img src={url}></Img>
        <NameWrapper>
          <Name>{name}</Name>
          <Description>{description}</Description>
          <ButtonsCard>
            <ViewButton onClick={minus}>-</ViewButton>
            {count}
            <ViewButton onClick={plus}>+</ViewButton>
          </ButtonsCard>
           {numberWithCommas(calcPrice)} $
        </NameWrapper>
      </Wrapper>
    );
  };
