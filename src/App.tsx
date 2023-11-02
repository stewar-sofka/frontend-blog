import { Box, useColorModeValue } from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
import { appColors } from './constants/theme/colors'
import { Home } from './pages/Home'

export const App = (): JSX.Element => {
  return (
    <Box
      backgroundColor={useColorModeValue(
        appColors.MAIN_COLOR,
        appColors.MAIN_COLOR
      )}
      height='100vh'
    >
      <Navbar />
      <Home />
    </Box>
  )
}
