import { Flex, Text } from '@chakra-ui/react'
import { CardProps } from './Card.types'

const Card: React.FC<CardProps> = ({ name, article, fullName, price, brand, manufacture }) => {
  return (
    <Flex
      flexDirection={'column'}
      border={'1px solid black'}
      borderRadius={'15px'}
      padding={'15px'}
      gap={15}
    >
      <Text>Артикул: {article}</Text>
      <Text>Полное имя: {fullName}</Text>
      <Text>Имя: {name}</Text>

      <Flex flexDirection={'column'}>
        <Text>Цена: {price.price}</Text>
        <Text>Цена озон: {price.price_ozone}</Text>
        <Text>Цена яндекс: {price.price_yandex}</Text>
      </Flex>

      <Flex columnGap={15}>
        <Text>Бренд: {brand.brand_name}</Text>
        <Text>Страна производитель: {manufacture.manufacture_name}</Text>
      </Flex>
    </Flex>
  )
}

export default Card
