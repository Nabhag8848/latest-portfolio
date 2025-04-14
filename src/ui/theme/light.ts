import { BACKGROUND_LIGHT } from "./background/light";
import { THEME_COMMON } from "./common";
import { FONT_LIGHT } from "./font/light";

export const THEME_LIGHT = {
  __name__: "light",
  background: BACKGROUND_LIGHT,
  font: FONT_LIGHT,
  ...THEME_COMMON,
};
