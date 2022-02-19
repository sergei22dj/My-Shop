import styled from 'styled-components';

export const DesktopModalContainer = styled.div`
  font-size: 48px;
  background-color: black;
  text-align: center;
  border-radius: 50px 0 0 50px;
  width: 500px;
  overflow: overlay;
  height: 70vh;
  box-shadow: 0px 0px 42px 16px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const DesktopModalEmptyContainer = styled.div`
  width: 500px;
  color: white;
  font-size: 48px;
  height: 300px;
  border-radius: 50px;
  background-color: black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderModal = styled.div`
  color: white;
  margin: 0;
  width: 500px;
  border-bottom: 1px solid white;
  position: fixed;
  background-color: #7cb5b7;
  border-radius: 40px 0 0 0;
`;

export const ButtonBar = styled.div`
  background-color: #7cb5b7;
  position: fixed;
  bottom: 15vh;
  width: 500px;
  border-radius: 0 0 0 50px;
`;

export const ProductsList = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  border: 1px solid white;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Name = styled.p`
  color: white;
  font-size: 24px;
`;

export const Description = styled.p`
  color: white;
  font-size: 16px;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const ProductsWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.white};
  margin: 60px 0;
  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonsCard = styled.div`
  font-size: 24px;
  color: white;
`;

export const ActionButton = styled.button`
  margin: 20px;
  font-size: 24px;
  background-color: #feffff;
  border: none;
  height: 40px;
  border-radius: 15px;
`;

export const CLOSE_BUTTON_SIZE = 40;

const CloseButton = styled.div`
  position: absolute;
  width: ${CLOSE_BUTTON_SIZE}px;
  height: ${CLOSE_BUTTON_SIZE}px;
  background-color: #c8c8c8;
  border-radius: 50%;
  cursor: pointer;

  & > * {
    opacity: 1;
  }

  &:hover {
    color: white;
  }
`;

export const CloseDesktop = styled(CloseButton)`
  top: -${CLOSE_BUTTON_SIZE / 2}px;
  left: calc(100% - ${CLOSE_BUTTON_SIZE / 2}px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseSign = styled.div`
  font-size: 24px;
  color: black;

  &:hover {
    color: white;
  }
`;
