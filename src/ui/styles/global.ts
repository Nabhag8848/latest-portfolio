import { ThemeType } from "@ui/types/ThemeType";

export const globalStyles = (theme: ThemeType) => () => {
  return {
    body: {
      backgroundColor: theme.background.tertiary,
      margin: 0,
    },
  };
};
