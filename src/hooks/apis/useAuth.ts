import { useApiRequest } from '@/hooks/http'
import type { LoginPayload, LoginResponse } from '@/types'

export const useAuthApi = {
  // 登入使用
  login: (payload: LoginPayload): LoginResponse => {
    return useApiRequest.post({
      url: '/auth/login/',
      data: payload
    })
  },
  // 驗證需要權限的頁面使用
  authPerrmission: (): LoginResponse => {
    return useApiRequest.get({
      url: '/auth/'
    })
  }
}
