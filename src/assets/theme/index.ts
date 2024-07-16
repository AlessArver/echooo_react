import { colorLight, colorDark } from "./colors";

export const theme = {
  light: {
    background: colorLight,
    fontColor: colorDark,
  },
  dark: {
    background: colorDark,
    fontColor: colorLight,
  },
};
export const defaultTheme = theme.light;

export type CurrentThemeType = typeof theme.light;
