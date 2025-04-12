import { Outlet, useLocation } from "react-router";
import { StrictMode } from "react";
import { getPageTitleFromPath } from "@utils/title-util";
import { PageTitle } from "@ui/utils/PageTitle";
import { ThemeProvider } from "@emotion/react";
import { THEME_DARK } from "@ui/theme/dark";

export const AppRouterProviders = () => {
  const { pathname } = useLocation();
  const title = getPageTitleFromPath(pathname);
  const theme = THEME_DARK;

  return (
    <ThemeProvider theme={theme}>
      <StrictMode>
        <PageTitle title={title} />
        <Outlet />
      </StrictMode>
    </ThemeProvider>
  );
};
