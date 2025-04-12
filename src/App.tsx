import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { AppRouter } from "@app/components/AppRouter";

export const App = () => {
  return (
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  );
};
