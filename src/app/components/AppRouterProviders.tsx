import { useLocation } from "react-router";
import { getPageTitleFromPath } from "../../utils/title-util";
import { PageTitle } from "../../ui/utils/PageTitle";
import { StrictMode } from "react";

export const AppRouterProviders = () => {
  const { pathname } = useLocation();
  const title = getPageTitleFromPath(pathname);
  
  return (
    <StrictMode>
      <PageTitle title={title} />
    </StrictMode>
  );
};
