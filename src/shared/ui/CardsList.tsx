import { Grid } from '@chakra-ui/react'
import Card from './Card'
import { CardsListProps } from './Card.types'

const CardsList: React.FC<CardsListProps> = ({ cardsData }) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={15} marginInline={'30px'}>
      {cardsData?.map((card) => (
        <Card key={card.article} {...card} />
      ))}
    </Grid>
  )
}

export default CardsList
