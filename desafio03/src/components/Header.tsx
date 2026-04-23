import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({ login: false })
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex padding='15px' alignItems='center' justifyContent='center'>
  
      {isLoggedIn && <Box width='80px' />} 

      <Spacer />

      <Center>
        <Text fontSize='3xl' fontWeight='bold' color='white'>
          Dio Bank
        </Text>
      </Center>

      <Spacer />

      {isLoggedIn && (
        <Button
          width='80px'
          colorScheme='red' 
          size='sm'
          onClick={() => logout()}
        >
          Sair
        </Button>
      )}
    </Flex>
  )
}