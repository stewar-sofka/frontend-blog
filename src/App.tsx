import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import { PostCard } from './components/PostCard'
import { Navbar } from './components/Navbar'
import { appColors, typographyColors } from './constants/theme/colors'

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
      <Heading
        size='sm'
        p={2}
        cursor='pointer'
        color={useColorModeValue(
          typographyColors.MAIN_COLOR,
          typographyColors.SECONDARY_COLOR
        )}
      >
        This is the home of the blog
      </Heading>
      <PostCard
        img='image-url-1'
        title='Title 1'
        content='Content 1'
        tags='Tags 1'
      />

      <PostCard
        img='image-url-2'
        title='Title 2'
        content='Content 2'
        tags='Tags 2'
      />

      <PostCard
        img='image-url-3'
        title='Title 3'
        content='Content 3'
        tags='Tags 3'
      />
    </Box>
  )
}
