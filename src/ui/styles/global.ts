import { ThemeType } from "@ui/types/theme";

export const globalStyles = (theme: ThemeType) => () => {
  return {
    "*, *::before, *::after": {
      margin: 0,
      padding: 0,
      "box-sizing": "border-box",
    },
    body: {
      backgroundColor: theme.background.tertiary,
      "overflow-x": "hidden",
    },
  };
};
