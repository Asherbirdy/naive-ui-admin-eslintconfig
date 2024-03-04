import { useApiRequest } from '@/hooks/http'
import type { ShowCurrentUserResponse } from '@/types'

export const useUserApi = {
  //
  showCurrentUser: (): ShowCurrentUserResponse => {
    return useApiRequest.get({
      url: '/users/showMe/'
    })
  }
}
