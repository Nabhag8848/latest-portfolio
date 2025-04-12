import { ThemeType } from "./ThemeType";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
