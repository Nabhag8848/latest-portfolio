import { useCreateRouter } from "@app/hooks/useCreateRouter";
import { RouterProvider } from "react-router";

export const AppRouter = () => {
  return <RouterProvider router={useCreateRouter()} />;
};
