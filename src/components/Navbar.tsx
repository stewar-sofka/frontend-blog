import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { appColors, typographyColors } from '../constants/theme/colors'

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
