import { Button, Flex } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { setPage } from '../Filter/Filter.slice'

interface PaginationButtonsProps {
  page: number
  total_pages: number
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({ page, total_pages }) => {
  const dispatch = useDispatch()

  const handleChangePage = (newPage: number) => {
    if (total_pages && newPage >= 1 && newPage <= total_pages) {
      dispatch(setPage(newPage))
    }
  }

  const renderPageButtons = () => {
    if (!total_pages) return null

    const maxVisibleButtons = 5
    const halfVisible = Math.floor(maxVisibleButtons / 2)

    let startPage = Math.max(1, page - halfVisible)
    let endPage = Math.min(total_pages, page + halfVisible)

    if (page <= halfVisible) {
      endPage = Math.min(total_pages, maxVisibleButtons)
    } else if (page + halfVisible >= total_pages) {
      startPage = Math.max(1, total_pages - maxVisibleButtons + 1)
    }

    const pageButtons = []
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <Button key={i} onClick={() => handleChangePage(i)} isActive={i === page}>
          {i}
        </Button>
      )
    }

    return pageButtons
  }

  return (
    <Flex justifyContent={'center'} gap={2}>
      {page > 1 && <Button onClick={() => handleChangePage(1)}>Начало</Button>}
      {page > 1 && <Button onClick={() => handleChangePage(page - 1)}>{'<'}</Button>}

      {renderPageButtons()}

      {page < total_pages && <Button onClick={() => handleChangePage(page + 1)}>{'>'}</Button>}
      {page < total_pages && <Button onClick={() => handleChangePage(total_pages)}>Конец</Button>}
    </Flex>
  )
}

export default PaginationButtons
