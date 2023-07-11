"use client";

import { memo } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "@/utils/themes";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <main className="MainContainer">{children}</main>
    </ThemeProvider>
  );
}

export default memo(PageLayout);
