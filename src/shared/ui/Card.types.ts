import { Price } from '../../entities/Article/Article.types'

export interface CardProps {
  name: string
  article: string
  fullName: string
  price: Price
  brand: {
    brand_name: string
  }
  manufacture: {
    manufacture_name: string
  }
}

export interface CardsListProps {
  cardsData: CardProps[]
}
