import { Card, CardBody, Heading, Image, Tag, Text } from '@chakra-ui/react'
import { appColors, typographyColors } from '../constants/theme/colors'

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
  return (
    <Card size='sm' backgroundColor={appColors.LIGHT_TONE} maxW='400px' m={2} rounded='lg' cursor='pointer'>
      <CardBody>
        <Image src={img} alt='alt of image' rounded='lg' />
        <Heading size='md' textTransform='uppercase' color={typographyColors.SECONDARY_COLOR}>
          {title}
        </Heading>
        <Text noOfLines={2}>{content}</Text>
        <Tag mt={2} color='teal.500'>
          {tags}
        </Tag>
      </CardBody>
    </Card>
  )
}
