import { ThemeType } from "@ui/types/theme";

export const globalStyles = (theme: ThemeType) => () => {
  return {
    body: {
      backgroundColor: theme.background.tertiary,
      margin: 0,
    },
  };
};
