import { Global } from "@emotion/react";
import { Outlet } from "react-router";

export const DefaultLayout = () => {
  return (
    <>
      <Global
        styles={{
          body: {
            margin: 0,
          },
        }}
      />
      <Outlet />
    </>
  );
};
