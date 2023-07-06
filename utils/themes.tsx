import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: '#889c9e',
  border: '#5f767b',
  background: '#5f767b',
  colors: {
    primaryColor: "#ffffff",
    secondaryColor: "#38546a",
  },
}

export const darkTheme = {
  body: '#022a54',
  border: '#021c38',
  background: '#021c38',
  colors: {
    primaryColor: "#ffffff",
    secondaryColor: "#517d9e",
  },
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`
