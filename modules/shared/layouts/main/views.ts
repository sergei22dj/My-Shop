import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  box-shadow: inset 0 0 30px white;
  min-height: 100%;
  padding-top: 60px;
`;
