/* eslint-disable no-useless-escape */
/* eslint-disable no-console */
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Theme } from "../utils/Theme";
import { StyledEngineProvider } from "@mui/material";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
html {
  background: ${Theme.background.backgroundColor};
  scroll-behavior: smooth;

}
body {
  max-width: 100vw;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 0.25em;
}
 
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: ${Theme.background.backgroundColor};

}
 
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 8px;
  outline: 1px solid ${Theme.background.backgroundColorLight}9d;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  /* niceeeee */
  console.log(`
       __            __        __  __             ______    ______  
      /  |          /  |      /  |/  |           /      \  /      \ 
  ____$$ |  ______  $$ |____  $$ |$$/   ______  /$$$$$$  |/$$$$$$  |
 /    $$ | /      \ $$      \ $$ |/  | /      \ $$ |  $$ |$$ \__$$/ 
/$$$$$$$ | $$$$$$  |$$$$$$$  |$$ |$$ | $$$$$$  |$$ |  $$ |$$      \ 
$$ |  $$ | /    $$ |$$ |  $$ |$$ |$$ | /    $$ |$$ |  $$ | $$$$$$  |
$$ \__$$ |/$$$$$$$ |$$ |  $$ |$$ |$$ |/$$$$$$$ |$$ \__$$ |/  \__$$ |
$$    $$ |$$    $$ |$$ |  $$ |$$ |$$ |$$    $$ |$$    $$/ $$    $$/ 
 $$$$$$$/  $$$$$$$/ $$/   $$/ $$/ $$/  $$$$$$$/  $$$$$$/   $$$$$$/  
  `);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
