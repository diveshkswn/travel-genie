"use client";

import { memo } from "react";
import { HeaderComponent } from "../Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "@/utils/themes";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <div id="fb-root"></div>
      <HeaderComponent title="Main Header" />
      <main className="MainContainer">{children}</main>
      <section className="footer">
        <h1>Footer</h1>
      </section>
    </ThemeProvider>
  );
}

export default memo(PageLayout);
