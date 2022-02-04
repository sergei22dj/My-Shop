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

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 46px;
  }
`;

export const ProductImg = styled.img`
  display: block;
  widht: 50px;
  height: 50px;
`;

export const ProductDetailsContainer = styled.div`
  flex: 1;
`;

export const ProductName = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  background-color: #363837;
`;

export const ProductBackButton = styled.div`
  background-color: #ffffff00;
  opacity: 0.2;
  display: flex;
  align-items: center;
  height: 10rem;
  width: 33%;
  transition: 0.8s;
  border-radius: 50% 0 0 50%;
  cursor: pointer;
  &:hover {
    opacity: 1;
    background-color: #ffffff24;
  }
`;
