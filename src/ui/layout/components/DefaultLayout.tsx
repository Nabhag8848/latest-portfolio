import { Global } from "@emotion/react";
import { GLOBAL_STYLES } from "@ui/styles";
import { Outlet } from "react-router";

export const DefaultLayout = () => {
  return (
    <>
      <Global styles={GLOBAL_STYLES} />
      <Outlet />
    </>
  );
};
