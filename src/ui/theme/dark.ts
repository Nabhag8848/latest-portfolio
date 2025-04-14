import { BACKGROUND_DARK } from "./background/dark";
import { THEME_COMMON } from "./common";
import { FONT_DARK } from "./font/dark";

export const THEME_DARK = {
  __name__: "dark",
  background: BACKGROUND_DARK,
  font: FONT_DARK,
  ...THEME_COMMON,
};
