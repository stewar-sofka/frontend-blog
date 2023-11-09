import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'

export const Login = (): JSX.Element => {
  const { loginWithRedirect } = useAuth0()

  return (
    <>
      <Button onClick={() => loginWithRedirect().then}>Click to login</Button>
    </>
  )
}
