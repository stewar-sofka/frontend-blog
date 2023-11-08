import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea
} from '@chakra-ui/react'
import { useState } from 'react'

export const Contact = (): JSX.Element => {
  const [name, setName] = useState<string>('')

  console.log(name)

  return (
    <Box bgColor='white' maxWidth='600px' display='block' m='0 auto'>
      <Heading size='lg' textAlign='center' mb={3} textTransform='uppercase'>Contact us</Heading>
      <FormControl p={2}>
        <FormLabel htmlFor='name'>Name</FormLabel>
        <Input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />

        <FormLabel htmlFor='lastname'>Lastname</FormLabel>
        <Input type='text' id='lastname' />

        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input type='email' id='email' />

        <FormLabel htmlFor='email'>Description</FormLabel>
        <Textarea size='sm' rounded='lg' />

        <Button type='submit' mt={5} colorScheme='blue' width='100%'>
          Enviar
        </Button>
      </FormControl>
    </Box>
  )
}
