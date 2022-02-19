import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
  padding: 14px 0;
  width: 100%;
`;

export const InfoName = styled.div`
  text-align: right;
  flex: 1;
  padding: 0 10px;
`;

export const InfoValue = styled.div`
  flex: 1;
  padding: 0 10px;
`;
