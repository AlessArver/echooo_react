"use client";

import { ReactNode, useCallback, useContext, useEffect } from "react";
import { css } from "@emotion/react";
import { theme as themeData } from "@/assets/theme";
import { Context, ContextProvider } from "@/store";

export interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const context = useContext(Context);

  const handleChangeTheme = useCallback(
    (isDark: boolean) => {
      context?.setTheme(isDark ? themeData.dark : themeData.light);
    },
    [context]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", (e) => handleChangeTheme(e.matches));

    handleChangeTheme(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", (e) =>
        handleChangeTheme(e.matches)
      );
    };
  }, [handleChangeTheme]);

  return (
    <ContextProvider>
      <body
        css={css`
          background: ${context?.theme.background};
          color: ${context?.theme.fontColor};
        `}
      >
        {children}
      </body>
    </ContextProvider>
  );
}
