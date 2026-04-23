import { Button } from '@chakra-ui/react'

interface IButton {
    onClick: () => void
}

export const CustomButton = ({ onClick }: IButton) => {
    return (
        <Button 
            onClick={onClick} 
            colorScheme='teal' 
            size='sm' 
            width='100%' 
            marginTop='15px'
        >
            Entrar
        </Button>
    )
}