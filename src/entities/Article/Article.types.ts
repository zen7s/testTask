export interface Price {
  price: number
  price_yandex: number
  price_ozone: number
}

export interface Article {
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

export interface ApiResponse {
  max_result: number
  page: number
  startswith: string | null
  endswith: string | null
  contains: string | null
  article: string | null
  price_from: number
  price_to: number
  data: Article[]
  total_products: number
  total_pages: number
}

export interface Brands {
  id: number
  brand_name: string
}
