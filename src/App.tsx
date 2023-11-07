import { Box, useColorModeValue } from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
import { appColors } from './constants/theme/colors'
import { BrowserRouter } from 'react-router-dom'
import { PrincipalRoutes } from './routes/PrincipalRoutes'

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Box
        backgroundColor={useColorModeValue(
          appColors.MAIN_COLOR,
          appColors.MAIN_COLOR
        )}
        height='100vh'
      >
        <Navbar />
        <PrincipalRoutes />
      </Box>
    </BrowserRouter>
  )
}
