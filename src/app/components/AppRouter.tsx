import { RouterProvider } from "react-router";
import { useCreateRouter } from "../hooks/useCreateRouter";

export const AppRouter = () => {
  return <RouterProvider router={useCreateRouter()} />;
};
