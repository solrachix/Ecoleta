import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule, DefaultTheme } from 'styled-components';

import { Types } from './themes/Types';

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Types>;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Types {}
}

export { css, keyframes, ThemeProvider, DefaultTheme, Types };
export default styled;