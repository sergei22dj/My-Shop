import * as React from 'react';
// components
import Link from 'next/link';
// libs
import styled from 'styled-components';

interface Props {
  href: string;
  label: string;
}

const MenuI = styled.div`
  padding: 5px 10px;
  display: flex;
  align-item: center;

  a {
    text-decoration: none;
    transition: opacity 0.3s ease-in-out;
    font-size: 26px;
    padding: 8px 10px;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      opacity: 0.8;
    }
  }
`;

const MenuItem: React.FC<Props> = ({ href, label }) => (
  <MenuI>
    <Link href={href} passHref>
      <a>{label}</a>
    </Link>
    <img src='/static/images/cart.png' width='50px' height='50px' alt='cart-img' />
  </MenuI>
);

export { MenuItem };
