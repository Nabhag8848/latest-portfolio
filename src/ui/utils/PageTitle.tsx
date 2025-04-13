import { getPageTitleFromPath } from "@utils/title";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";

export const PageTitle = () => {
  const { pathname } = useLocation();
  const title = getPageTitleFromPath(pathname);

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
