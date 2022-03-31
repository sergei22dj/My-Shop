import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px 0;
`;

export const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
  margin: 0 auto;
`;

export const ProductImgContainer = styled.div`
  flex: 2;
  border-radius: 20px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 46px;
    padding: 15px;
  }
`;

export const ProductImg = styled.img`
  display: block;
  widht: 50px;
  height: 50px;
`;

export const ProductDetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
`;

export const ProductName = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.colors.darkGray};
  width: 50%;
  border-radius: 20px;
  @media (max-width: 640px){
    width: 100%;
    margin: 10px;
  }
`;

export const ProductBackButton = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  opacity: 0.1;
  display: flex;
  align-items: center;
  height: 200px;
  width: 25%;
  transition: 0.8s;
  border-radius: 50% 0 0 50%;
  cursor: pointer;
  &:hover {
    opacity: 0.3;
    background-color: ${({theme}) => theme.colors.white};
  }
  @media (max-width: 640px){
    display: none;
  }
`;
