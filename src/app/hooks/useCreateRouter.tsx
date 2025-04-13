import { AppRouterProviders } from "@app/components/AppRouterProviders";
import { DefaultLayout } from "@ui/layout/components/DefaultLayout";
import { AppPath } from "@utils/title";
import { Route } from "react-router";
import { createBrowserRouter, createRoutesFromElements } from "react-router";

export const useCreateRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppRouterProviders />}>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<></>} />
          <Route path={AppPath.HOME} element={<></>} />
          <Route path={AppPath.ABOUT} element={<></>} />
        </Route>
      </Route>
    )
  );
};
