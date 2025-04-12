import { Outlet, useLocation } from "react-router";
import { StrictMode } from "react";
import { getPageTitleFromPath } from "@utils/title-util";
import { PageTitle } from "@ui/utils/PageTitle";

export const AppRouterProviders = () => {
  const { pathname } = useLocation();
  const title = getPageTitleFromPath(pathname);

  return (
    <StrictMode>
      <PageTitle title={title} />
      <Outlet />
    </StrictMode>
  );
};
