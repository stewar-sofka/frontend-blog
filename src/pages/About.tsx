import { Box, Heading, Text } from '@chakra-ui/react'
import { appColors } from '../constants/theme/colors'

export const About = (): JSX.Element => {
  return (
    <Box
      bgGradient={`linear(to-b, white 50%, ${appColors.MAIN_COLOR} 90%)`}
      display='block'
      maxW='600px'
      m='auto'
      p={2}
      height='100ch'
      rounded='lg'
    >
      <Heading textAlign='center'>
        About this blog
      </Heading>
      <Text p={5} textAlign='justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum aut pariatur voluptatum vero. Commodi tenetur doloremque beatae quisquam unde modi assumenda iure, ipsam neque inventore voluptas atque dolorem esse.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita necessitatibus, officia tempora nesciunt tempore molestiae voluptatum est pariatur ullam quo quis cum, mollitia maxime vitae quaerat voluptatem repudiandae quibusdam aspernatur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum aut pariatur voluptatum vero. Commodi tenetur doloremque beatae quisquam unde modi assumenda iure, ipsam neque inventore voluptas atque dolorem esse.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita necessitatibus, officia tempora nesciunt tempore molestiae voluptatum est pariatur ullam quo quis cum, mollitia maxime vitae quaerat voluptatem repudiandae quibusdam aspernatur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum aut pariatur voluptatum vero. Commodi tenetur doloremque beatae quisquam unde modi assumenda iure, ipsam neque inventore voluptas atque dolorem esse.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita necessitatibus, officia tempora nesciunt tempore molestiae voluptatum est pariatur ullam quo quis cum, mollitia maxime vitae quaerat voluptatem repudiandae quibusdam aspernatur?
      </Text>

      <Heading size='sm' p={5}>Created by: Stewar</Heading>
    </Box>
  )
}
