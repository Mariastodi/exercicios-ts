import { Box } from "@chakra-ui/react"
import { Header } from "./Header"

export const Layout = ({ children }: any) => {
  return(
    <Box minHeight='100vh' backgroundColor='#1c08b5' >
      <Header />
      { children }
    </Box>
  )
}
