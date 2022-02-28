import { Theme as MUTheme } from "@mui/material/styles";
import Box, { BoxProps } from '@mui/material/Box';
declare module "@emotion/react" {
  export interface Theme extends MUTheme {}
}

declare module "react" {
  interface Attributes {
      css?: any;
  }
}