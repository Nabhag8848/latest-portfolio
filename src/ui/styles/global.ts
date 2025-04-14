import { ThemeType } from "@ui/types/theme";

export const globalStyles = (theme: ThemeType) => () => {
  return {
    ":root": {
      "font-size": "62.5%",
    },
    "*, *::before, *::after": {
      margin: 0,
      padding: 0,
      "box-sizing": "border-box",
    },
    body: {
      backgroundColor: theme.background.tertiary,
      "overflow-x": "hidden",
      "font-family": theme.font.family.sans,
      "font-weight": theme.font.weight.regular,
      "line-height": theme.text.lineHeight.default,
    },
  };
};
