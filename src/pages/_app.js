import "@/styles/globals.css";
import { theme } from "@/styles/theme";
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from "../components/@DarkOrLight";
import { ThemeContainer } from "../components/@DarkOrLight/ThemeContainer";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ThemeContainer>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeContainer>
    </ThemeProvider>
  )
}
