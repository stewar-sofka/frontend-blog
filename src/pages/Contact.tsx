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
    <Box
      bgColor='white'
      maxWidth='600px'
      display='block'
      m='auto auto'
      height='100ch'
      rounded='lg'
      boxShadow='lg'
    >
      <Heading size='lg' textAlign='center' mb={3} textTransform='uppercase'>
        Contact us
      </Heading>
      <FormControl p={2}>
        <FormLabel htmlFor='name'>Name</FormLabel>
        <Input
          type='text'
          id='name'
          name='name'
          value={state.name}
          onChange={handleInputChange}
          placeholder='Steward'
          required
        />

        <FormLabel htmlFor='lastName'>Lastname</FormLabel>
        <Input
          type='text'
          id='lastName'
          name='lastName'
          value={state.lastName}
          onChange={handleInputChange}
          placeholder='Marin'
        />

        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input
          type='email'
          id='email'
          name='email'
          value={state.email}
          onChange={handleInputChange}
          placeholder='QpN3M@example.com'
        />

        <FormLabel htmlFor='email'>Description</FormLabel>
        <Textarea
          size='sm'
          rounded='lg'
          id='description'
          name='description'
          value={state.description}
          onChange={handleInputChange}
        />

        <Button type='submit' mt={5} colorScheme='blue' width='100%'>
          Enviar
        </Button>
      </FormControl>
    </Box>
  )
}
