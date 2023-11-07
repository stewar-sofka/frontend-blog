import { Heading, Image, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { PostCard } from '../components/PostCard'
import { appColors, typographyColors } from '../constants/theme/colors'
import Hero from '../images/blogplatform.webp'

export const Home = (): JSX.Element => {
  return (
    <>
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

      <Image src={Hero} alt='Hero image' height='400px' width='100%' fit='scale-down' />

      <SimpleGrid minChildWidth='300px' justifyItems='center' bgColor={appColors.MAIN_COLOR}>
        <PostCard
          img='https://beconnected.esafety.gov.au/pluginfile.php/52815/mod_resource/content/12/fake-news-hero-img.jpg'
          title='Title 1'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          tags='Tags 1'
        />

        <PostCard
          img='https://beconnected.esafety.gov.au/pluginfile.php/52815/mod_resource/content/12/fake-news-hero-img.jpg'
          title='Title 2'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          tags='Tags 2'
        />

        <PostCard
          img='https://beconnected.esafety.gov.au/pluginfile.php/52815/mod_resource/content/12/fake-news-hero-img.jpg'
          title='Title 3'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          tags='Tags 3'
        />
      </SimpleGrid>

    </>
  )
}
