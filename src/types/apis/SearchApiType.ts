import type { OptimusQaApiResponse } from '../apis/_ApiResponseType'
import type { ProductItem } from '../apps/ListType'

// **
export interface SearchToursPayload {
  query: string
  num: number
}

interface SearchToursData {
  store_list: string[]
  product_list: ProductItem[]
}

// Promise<SearchToursResponse>
export type SearchToursResponse = OptimusQaApiResponse<SearchToursData>



