import { Box, Center, Text } from '@chakra-ui/react'

export const Header  = () => {
  return(
    <Box backgroundColor='transparent' padding='10px'>
      <Center>
        <Text fontSize='3xl' fontWeight='bold' color='white'>
          Dio Bank
        </Text>
      </Center>
    </Box>
  )
}