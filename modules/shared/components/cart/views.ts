import styled from 'styled-components';

export const DesktopModalContainer = styled.div`
  font-size: 36px;
  background-color: ${({theme}) => theme.colors.black};
  text-align: center;
  width: 100%;
  max-width: 500px;
  overflow: overlay;
  height: 70vh;
  box-shadow: 0px 0px 42px 16px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderModal = styled.div`
  color: ${({theme}) => theme.colors.white};
  margin: 0;
  width: 100%;
  max-width: 500px;
  border-bottom: 1px solid white;
  height: 50px;
  background-color: ${({theme}) => theme.colors.turquoise};
  border-radius: 30px 30px 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 10px;
  font-size: 46px;
`;

export const ButtonBar = styled.div`
  background-color: ${({theme}) => theme.colors.turquoise};
  bottom: 15vh;
  width: 100%;
  max-width: 500px;
  border-radius: 0 0 30px 30px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ProductsList = styled.div`
  display: flex;
`;

export const ProductsWrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const ActionButton = styled.button`
  margin: 20px;
  padding: 10px;
  font-size: 24px;
  background-color: #feffff;
  border-radius: 35px;
  box-shadow: inset 0 0 10px;
  cursor: pointer;
  border: 1px solid black;
  width: 100%;

  &:active{
    box-shadow: inset 0 0 20px;
  }
`;

const CloseButton = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({theme}) => theme.colors.lightGray};
  border-radius: 50%;
  cursor: pointer;

  & > * {
    opacity: 1;
  }

  &:hover {
    color: ${({theme}) => theme.colors.white};
  }
`;

export const CloseDesktop = styled(CloseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseSign = styled.div`
  font-size: 24px;
  color: ${({theme}) => theme.colors.black};

  &:hover {
    color: ${({theme}) => theme.colors.white};
  }
`;

export const Empty = styled.div`
width: 100%;
padding: 0 60px;
margin: auto auto;
color: ${({theme}) => theme.colors.white}
`