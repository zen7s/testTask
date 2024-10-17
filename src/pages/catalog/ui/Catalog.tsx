import { Box, Flex, Text } from '@chakra-ui/react'
import FilterForm from '../../../features/Filter/FilterForm'
import CardsList from '../../../shared/ui/CardsList'
import { useSelector } from 'react-redux'

import PaginationButtons from '../../../features/PaginationButtons/PaginationButtons'

import { useGetArticlesQuery } from '../../../entities/Article/Article.api'
import { useNormalizeParams } from '../../../shared/hooks/useNormalizeParams'
import { FilterParams } from '../../../features/Filter/Filter.types'
import { RootState } from '../../../app/store'

const Catalog: React.FC = () => {
  const filters = useSelector((state: RootState) => state.filters)
  const normalizedParams: FilterParams = useNormalizeParams(filters)

  const { data: articles, isFetching, isError } = useGetArticlesQuery(normalizedParams)

  return (
    <Flex
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'space-between'}
      h={'100%'}
    >
      <FilterForm />

      {isFetching && <Text>Загрузка товара...</Text>}

      {isError && (
        <Box>
          <Text color="red">Ошибка при загрузке товаров.</Text>
        </Box>
      )}

      {!isFetching && !isError && articles?.data.length === 0 && <Text>Товары не найдены.</Text>}

      {!isFetching && !isError && articles && articles.data.length > 0 && (
        <>
          <CardsList cardsData={articles.data} />

          <PaginationButtons page={filters.page} total_pages={articles.total_pages} />
        </>
      )}
    </Flex>
  )
}

export default Catalog
