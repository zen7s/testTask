import { Box, Button, Flex, Input, Select } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { useGetBrandsQuery } from '../../entities/Article/Article.api'
import { setFilters } from './Filter.slice'
import { FilterParams } from './Filter.types'
import { Brands } from '../../entities/Article/Article.types'

const FilterForm: React.FC = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const { data: brands } = useGetBrandsQuery()

  const onSubmit = (data: FilterParams) => {
    const filteredData = {
      ...data,
      price_from: data.price_from ? Number(data.price_from) : 0,
      price_to: data.price_to ? Number(data.price_to) : 0,
      page: 1,
      //   brand_id: data.brand_id ?? '',
    }

    dispatch(setFilters(filteredData))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex minW={'50vw'} padding={'30px'} columnGap={30}>
        <Box maxW={'30vw'}>
          {['startswith', 'endswith', 'contains', 'article'].map((name) => (
            <Input key={name} placeholder={`Название (${name})`} {...register(name)} />
          ))}
        </Box>

        <Box>
          <Input placeholder="Цена от" {...register('price_from')} type="number" />

          <Input placeholder="Цена до" {...register('price_to')} type="number" />

          <Select placeholder="Выберите бренд" {...register('brand_id')}>
            {brands?.map(({ id, brand_name }: Brands) => (
              <option key={id} value={id}>
                {brand_name}
              </option>
            ))}
          </Select>
          <Button type="submit" w={'100%'}>
            Поиск
          </Button>
        </Box>
      </Flex>
    </form>
  )
}

export default FilterForm
