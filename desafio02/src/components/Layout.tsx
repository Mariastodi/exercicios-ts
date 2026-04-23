import { Box, ChakraProvider } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#1807d4' padding='25px'>
        <Header />
        { children }
      </Box>
    </ChakraProvider>
  )
}