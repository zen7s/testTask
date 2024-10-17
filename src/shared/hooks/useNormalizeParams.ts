import { FilterParams } from '../../features/Filter/Filter.types'

export const useNormalizeParams = (params: FilterParams) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Object.fromEntries(Object.entries(params).filter(([_, value]) => value !== ''))
}
