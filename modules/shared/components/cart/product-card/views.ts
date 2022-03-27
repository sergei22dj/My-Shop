import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px white;
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

export const ButtonsCard = styled.div`
  font-size: 24px;
  color: white;
  display: flex;
  font-size: 24px;
  color: white;
  align-items: center;
  justify-content: space-evenly;
`;
