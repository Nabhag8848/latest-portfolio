import { HelmetProvider } from "react-helmet-async";
import { AppRouter } from "@app/components/AppRouter";

export const App = () => {
  return (
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  );
};
