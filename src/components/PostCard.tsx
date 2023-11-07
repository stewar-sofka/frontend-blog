import { Card, CardBody, Heading, Image, Tag, Text } from '@chakra-ui/react'
import { appColors, typographyColors } from '../constants/theme/colors'
import { useNavigate } from 'react-router-dom'

interface PostCardProps {
  img: string
  title: string
  content: string
  tags: string
}

export const PostCard = ({
  img,
  title,
  content,
  tags
}: PostCardProps): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Card
      size='sm'
      bgGradient={`linear(to-b, ${appColors.LIGHT_TONE}, ${appColors.MAIN_COLOR})`}
      maxW='400px'
      m={2}
      rounded='lg'
      cursor='pointer'
      boxShadow='lg'
      onClick={() => {
        navigate('/detail', {
          state: {
            img,
            title,
            content,
            tags
          }
        })
      }}
    >
      <CardBody>
        <Image src={img} alt='alt of image' rounded='lg' mb={1} />
        <Heading
          size='md'
          textTransform='uppercase'
          color='#ededed'
        >
          {title}
        </Heading>
        <Text noOfLines={2} color={typographyColors.MAIN_COLOR}>{content}</Text>
        <Tag mt={2} color='teal.500'>
          {tags}
        </Tag>
      </CardBody>
    </Card>
  )
}
