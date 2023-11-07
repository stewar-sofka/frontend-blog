import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { appColors, typographyColors } from '../constants/theme/colors'
import { Link } from 'react-router-dom'

export const Navbar = (): JSX.Element => {
  return (
    <Box
      backgroundColor={useColorModeValue(
        appColors.MAIN_COLOR,
        appColors.MAIN_COLOR
      )}
      minHeight='50px'
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
        </Flex>
      </Flex>
    </Box>
  )
}
