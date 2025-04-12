import { Global, useTheme } from "@emotion/react";
import { globalStyles } from "@ui/styles/global";
import { useMemo } from "react";
import { Outlet } from "react-router";

export const DefaultLayout = () => {
  const theme = useTheme();
  const styles = useMemo(() => globalStyles(theme), [theme]);

  return (
    <>
      <Global styles={styles} />
      <Outlet />
    </>
  );
};
