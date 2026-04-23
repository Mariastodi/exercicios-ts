import { 
  Center,
  Input,
  Box
} from '@chakra-ui/react'
import { Layout } from './components/Layout';
import { Card } from './components/Card';
import { CustomButton } from './components/CustomButton';
import { welcome } from './services/welcome';

function App() {
  return (
    <Layout>
      <Box padding="25px">
        <Card>
          <Center>
            <h1>Faça o login</h1>
          </Center>
          
          <Input 
            placeholder="email" 
            marginTop="15px" 
          />
          
          <Input 
            placeholder="password" 
            type="password" 
            marginTop="10px" 
          />

          <Center>
            <CustomButton onClick={welcome} />
          </Center>
        </Card>
      </Box>
    </Layout>
  );
}

export default App;