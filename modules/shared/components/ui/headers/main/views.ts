import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  dispay: block;
  top: 0;
  left: 0;
  right: 0;

  z-index: 9999;

  background: radial-gradient(50% 70%, ${({theme}) => theme.colors.purple}, ${({theme}) => theme.colors.LightBlue});
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`;

export const IWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  margin: 0 auto;

  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
`;

export const LWrapper = styled.div`
  flex: 1;

  img {
    display: block;
    max-height: 50px;
  }
  a {
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    font-size: 46px;
    font-style: oblique;
  }

  ${({ theme }) => theme.templates.centerItems};
`;

export const RWrapper = styled.div`
  flex: 2;
  justify-content: flex-end;

  ${({ theme }) => theme.templates.centerItems};
`;

export const CWrapper = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 15px;
  cursor: pointer;
`;

export const Counter = styled.div`
  position: fixed;
  background-color: ${({theme}) => theme.colors.blue};
  width: 20px;
  border-radius: 100%;
  height: 20px;
  text-align: center;
`;
