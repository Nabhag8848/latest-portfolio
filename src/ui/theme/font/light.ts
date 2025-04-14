import { GRAY_SCALE } from "../colors/GrayScale";
import { FONT_COMMON } from "./common";

export const FONT_LIGHT = {
  color: {
    primary: GRAY_SCALE.gray950, // Highest emphasis
    secondary: GRAY_SCALE.gray800, // Slightly muted
    tertiary: GRAY_SCALE.gray700, // Lower emphasis
    light: GRAY_SCALE.gray600, // Soft, subtle
    extraLight: GRAY_SCALE.gray500, // Hints, inactive
    inverted: GRAY_SCALE.gray50, // Use on dark surfaces
  },
  ...FONT_COMMON,
};
