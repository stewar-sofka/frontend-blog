import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea
} from '@chakra-ui/react'
import { useForm } from '../hooks/useForm'

export const Contact = (): JSX.Element => {
  const [state, handleInputChange] = useForm({
    name: '',
    lastName: '',
    email: '',
    description: ''
  })

  return (
    <Box bgColor='white' maxWidth='600px' display='block' m='0 auto'>
      <Heading size='lg' textAlign='center' mb={3} textTransform='uppercase'>Contact us</Heading>
      <FormControl p={2}>
        <FormLabel htmlFor='name'>Name</FormLabel>
        <Input type='text' id='name' name='name' value={state.name} onChange={handleInputChange} />

        <FormLabel htmlFor='lastName'>Lastname</FormLabel>
        <Input type='text' id='lastName' name='lastName' />

        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input type='email' id='email' name='email' />

        <FormLabel htmlFor='email'>Description</FormLabel>
        <Textarea size='sm' rounded='lg' id='description' name='description' />

        <Button type='submit' mt={5} colorScheme='blue' width='100%'>
          Enviar
        </Button>
      </FormControl>
    </Box>
  )
}
