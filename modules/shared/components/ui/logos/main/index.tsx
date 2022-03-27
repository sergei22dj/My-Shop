import * as React from 'react';

// components
import Link from 'next/link';

const Logo = () => (
  <Link href='/' passHref>
    <a>Shop</a>
  </Link>
);

const BackImg = () => (
  <Link href='/products' passHref>
    <a>
      <img src='/static/logos/left-arrow.png' width='70px' height='70px' alt='dollar-logo' />
    </a>
  </Link>
);

const CartImg = () => {
  return (
    <>
      <img src='/static/logos/cart.png' width='70px' height='70px' />
    </>
  );
};

export { Logo, BackImg, CartImg };
