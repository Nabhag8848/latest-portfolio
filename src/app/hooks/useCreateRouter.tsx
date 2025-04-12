import { Route } from "react-router";
import { createBrowserRouter, createRoutesFromElements } from "react-router";
import { AppRouterProviders } from "../components/AppRouterProviders";
import { AppPath } from "../../utils/title-util";

export const useCreateRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppRouterProviders />}>
        <Route path="/" element={<></>} />
        <Route path={AppPath.HOME} element={<></>} />
        <Route path={AppPath.ABOUT} element={<></>} />
      </Route>
    )
  );
};
