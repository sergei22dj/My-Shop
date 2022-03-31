import styled from 'styled-components';

export const CardWrapper = styled.div`
  border: 2px solid black;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

export const CardImgWrapper = styled.div`
  padding: 80% 0 0 0;
  position: relative;
`;

export const CardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.gray1000};
  padding: 10px 10px;

  a {
    text-decoration: none;
  }
`;

export const CardFooterTitle = styled.h5`
  font-weight: bold;
  line-height: 1.28;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`;

export const ViewButton = styled.button`
   {
    padding: 5px 10px;
    background-color: ${({ theme }) => theme.colors.black};
    background-image: linear-gradient(#96d1ed, #bd7dc5);
    background-repeat: no-repeat;
    background-size: 0 100%;
    background-position-x: center;
    border-radius: 22px;
    border: 1px solid #131314;
    color: ${({ theme }) => theme.colors.white};
    outline: none;
    -webkit-transition: background-size 300ms;
    transition: background-size 300ms;
    cursor: pointer;
  }

  &:hover {
    background-size: 100% 100%;
    color: ${({ theme }) => theme.colors.black};
    box-shadow: inset 0 0 1px black;
  }

  &:active {
    box-shadow: inset 0 0 15px black;
  }
`;

export const CardName = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
  font-family: inherit;
  text-align: center;
  font-size: 25px;
  border: 1 px solid white;
  background-color: ${({ theme }) => theme.colors.LightBlue};
  border-radius: 15 px;
  box-shadow: inset 0 0 10px black;
`;
