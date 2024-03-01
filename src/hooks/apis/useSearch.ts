import { useApiRequest } from '@/hooks/http'

import type {
  SearchToursPayload,
  SearchToursResponse
} from '@/types'

import { wrapPromise } from '@/utils'

export const useSearchApi = {
  searchTours: async (payload: SearchToursPayload): Promise<SearchToursResponse> => {
    const promise = useApiRequest.post({
      url: '/get-top-tours/',
      data: payload
    })
    return wrapPromise(promise)
  }
}
