import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 60px 10px;
  margin: 0 auto;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
`;
