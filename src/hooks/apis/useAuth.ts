import { useApiRequest } from '@/hooks/http'
import type { LoginPayload, LoginResponse } from '@/types'

export const useAuthApi = {
  login: (payload: LoginPayload): LoginResponse => {
    const promise = useApiRequest.post({
      url: '/auth/login/',
      data: payload
    })
    return promise
  }
}
