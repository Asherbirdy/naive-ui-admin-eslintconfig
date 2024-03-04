import { useApiRequest } from '@/hooks/http'
import type { LoginPayload, LoginResponse } from '@/types'

export const useUserApi = {
  //
  showCurrentUser: (): any => {
    return useApiRequest.get({
      url: '/users/showMe/',
      withCredentials: true
    })
  }
}
