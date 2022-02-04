import * as React from 'react';
// view components
import { MenuItem } from '@md-ui/menu-items/main';
import { Logo } from '@md-ui/logos/main';
// constants
import { menuItems } from './constants';
// views
import { Wrapper, IWrapper, LWrapper, RWrapper, NameWrapper } from './views';

const Header = () => {
  return (
    <Wrapper>
      <IWrapper>
        <LWrapper>
          <Logo />
        </LWrapper>
        <NameWrapper>My Shop</NameWrapper>
        <RWrapper>
          {menuItems.map(({ l, h }) => (
            <MenuItem key={l} href={h} label={l} />
          ))}
        </RWrapper>
      </IWrapper>
    </Wrapper>
  );
};

export { Header };
