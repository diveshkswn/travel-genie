"use client";

import { memo, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "@/utils/themes";
import momentjs from 'moment';

const themeMap = {
  light: lightTheme,
  dark: darkTheme,
};

function PageLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light'|'dark'>('dark');
  useEffect(() => {
    setTheme(() => {
      if (momentjs().hour() > 18) {
        return 'dark'
      }
      return 'light'
    })
  },[])
  return (
    <ThemeProvider theme={themeMap[theme]}>
      <GlobalStyles />
      <main className="MainContainer">{children}</main>
    </ThemeProvider>
  );
}

export default memo(PageLayout);
