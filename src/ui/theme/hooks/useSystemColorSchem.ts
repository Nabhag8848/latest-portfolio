import { ColorScheme } from "@ui/types/color";
import { useEffect, useMemo, useState } from "react";

export const useSystemColorScheme = (): ColorScheme => {
  const mediaQuery = useMemo(
    () => window.matchMedia("(prefers-color-scheme: dark)"),
    []
  );

  const [preferredColorScheme, setPreferredColorScheme] = useState<ColorScheme>(
    !window.matchMedia || !mediaQuery.matches ? "light" : "dark"
  );

  useEffect(() => {
    const handleChange = (event: MediaQueryListEvent): void => {
      setPreferredColorScheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [mediaQuery]);

  return preferredColorScheme;
};
