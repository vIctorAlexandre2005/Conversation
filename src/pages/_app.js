import UserChatComponent from "@/components/Context";
import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <UserChatComponent>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserChatComponent>
  )
}
