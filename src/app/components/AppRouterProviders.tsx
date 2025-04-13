import { Outlet } from "react-router";
import { StrictMode } from "react";
import { PageTitle } from "@ui/utils/PageTitle";
import { ThemeProvider } from "@emotion/react";
import { THEME_DARK } from "@ui/theme/dark";
import { useSystemColorScheme } from "@ui/theme/hooks/useSystemColorSchem";
import { THEME_LIGHT } from "@ui/theme/light";

export const AppRouterProviders = () => {
  const preferredColorScheme = useSystemColorScheme();
  const isDarkMode = preferredColorScheme === "dark";
  const theme = isDarkMode ? THEME_DARK : THEME_LIGHT;

  document.documentElement.className = theme.__name__;

  return (
    <ThemeProvider theme={theme}>
      <StrictMode>
        <PageTitle />
        <Outlet />
      </StrictMode>
    </ThemeProvider>
  );
};
