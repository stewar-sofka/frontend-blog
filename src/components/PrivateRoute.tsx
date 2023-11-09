import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: JSX.Element
}

export const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  const { isAuthenticated, user } = useAuth0()

  console.log(isAuthenticated)

  useEffect(() => {
    console.log(user)
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <Navigate to='/login' />
    )
  }

  return children
}
