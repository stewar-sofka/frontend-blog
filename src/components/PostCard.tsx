import { Card, CardBody, Heading, Image, Tag, Text } from '@chakra-ui/react'

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
    <Card size='sm' colorScheme='gray' maxW='400px' m={2}>
      <CardBody>
        <Image src={img} alt='alt of image' />
        <Heading size='md' textTransform='uppercase'>
          {title}
        </Heading>
        <Text>{content}</Text>
        <Tag mt={2} color='teal.500'>
          {tags}
        </Tag>
      </CardBody>
    </Card>
  )
}
