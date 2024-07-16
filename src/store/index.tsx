import { defaultTheme } from "@/assets/theme";
import type { CurrentThemeType } from "@/assets/theme";

import { createContext, ReactNode, useMemo, useState } from "react";

export interface IContext {
  theme: CurrentThemeType;
  setTheme: (theme: CurrentThemeType) => void;
}
export const Context = createContext<IContext | undefined>(undefined);

export interface ContextProviderProps {
  children: ReactNode;
}
export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [theme, setTheme] = useState(defaultTheme);

  const handleChangeTheme = (value: CurrentThemeType) => {
    setTheme(value);
  };

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme: handleChangeTheme,
    }),
    [theme]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
