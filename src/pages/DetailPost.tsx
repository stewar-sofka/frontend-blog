import { Box, Center, Heading, Image, Tag, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { appColors, typographyColors } from '../constants/theme/colors'

interface locationProps {
  img: string
  title: string
  content: string
  tags: string
}

export const DetailPost = (): JSX.Element => {
  const location = useLocation()

  const state = location.state as locationProps

  return (
    <Box
      bgGradient={`linear(to-b, ${appColors.LIGHT_TONE} 10%, ${appColors.MAIN_COLOR} 90%)`}
    >
      <Image
        src={state.img}
        alt='alt of image'
        roundedBottom='lg'
        aspectRatio='565 / 308'
        fit='fill'
        width='100%'
        height='500px'
      />
      <Heading color={typographyColors.MAIN_COLOR} textAlign='center'>
        {state.title}
      </Heading>
      <Text
        color={typographyColors.TERTIARY_COLOR}
        display='block'
        maxWidth='500px'
        textAlign='justify'
        m='0 auto'
        px={2}
      >
        {state.content}
      </Text>
      <Center mt={5}>
        <Tag>{state.tags}</Tag>
      </Center>
    </Box>
  )
}
