import { GRAY_SCALE } from "../colors/GrayScale";
import { FONT_COMMON } from "./common";

export const FONT_DARK = {
  color: {
    primary: GRAY_SCALE.gray100, // Highest emphasis
    secondary: GRAY_SCALE.gray200, // Slightly muted
    tertiary: GRAY_SCALE.gray400, // Lower emphasis
    light: GRAY_SCALE.gray500, // Soft, subtle
    extraLight: GRAY_SCALE.gray600, // Very subtle
    inverted: GRAY_SCALE.gray950, // Use on light surfaces
  },
  ...FONT_COMMON,
};
