import { DefaultTheme, css } from 'styled-components';

export const colors = {
  // blue
  blue: '#00adff',
  blue400: '#0070f3',
  // green
  green300: '#2ab736',
  green200: '#87cc43',
  green100: '#87cc43',
  // gray
  gray400: '#272d3d',
  gray500: '#21293d',
  gray600: '#191e2d',
  lightGray: '#696969',
  darkGray: '#333333',
  gray800: '#4e4e4e',
  gray1000: '#131314',
  // other
  turquoise: '#7cb5b7',
  white: '#fff',
  black: '#000000',
  purple: '#bd7dc5',
  LightBlue: '#96d1ed'
};

export const templates = {
  absolute: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  centerContent: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  centerItems: css`
    display: flex;
    align-items: center;
  `
};

export const dimensions = {
  pageMaxWidth: 1071
};

export const theme: DefaultTheme = {
  colors,
  templates,
  dimensions
};
