import {
  Box,
  Button,
  Flex,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import { appColors, typographyColors } from '../constants/theme/colors'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export const Navbar = (): JSX.Element => {
  const { logout, isAuthenticated, loginWithPopup } = useAuth0()
  return (
    <Box
      backgroundColor={useColorModeValue(
        appColors.MAIN_COLOR,
        appColors.MAIN_COLOR
      )}
      minHeight='50px'
      p='0 2ch'
    >
      <Flex justifyContent='space-between'>
        <Flex>
          <Heading
            size='lg'
            p={2}
            cursor='pointer'
            color={useColorModeValue(
              typographyColors.MAIN_COLOR,
              typographyColors.SECONDARY_COLOR
            )}
          >
            The Blog
          </Heading>
        </Flex>
        <Flex alignItems='center'>
          <Heading
            as={Link}
            to='/'
            size='sm'
            p={2}
            cursor='pointer'
            color={useColorModeValue(
              typographyColors.MAIN_COLOR,
              typographyColors.SECONDARY_COLOR
            )}
          >
            Home
          </Heading>
          <Heading
            as={Link}
            to='/about'
            size='sm'
            p={2}
            cursor='pointer'
            color={useColorModeValue(
              typographyColors.MAIN_COLOR,
              typographyColors.SECONDARY_COLOR
            )}
          >
            About
          </Heading>
          <Heading
            as={Link}
            to='/contact'
            size='sm'
            p={2}
            cursor='pointer'
            color={useColorModeValue(
              typographyColors.MAIN_COLOR,
              typographyColors.SECONDARY_COLOR
            )}
          >
            Contact
          </Heading>
          {/* LOGOUT */}
          {isAuthenticated
            ? (
              <Heading
                as={Button}
                onClick={() => logout().then}
                size='sm'
                p={2}
                cursor='pointer'
                color={useColorModeValue(
                  typographyColors.MAIN_COLOR,
                  typographyColors.SECONDARY_COLOR
                )}
                bg='none'
                _hover={{ bg: 'none' }}
              >
                Log out
              </Heading>
              )
            : (
              <Heading
                as={Button}
                onClick={() => loginWithPopup().then}
                size='sm'
                p={2}
                cursor='pointer'
                color={useColorModeValue(
                  typographyColors.MAIN_COLOR,
                  typographyColors.SECONDARY_COLOR
                )}
                bg='none'
                _hover={{ bg: 'none' }}
              >
                Log in
              </Heading>
              )}
        </Flex>
      </Flex>
    </Box>
  )
}
