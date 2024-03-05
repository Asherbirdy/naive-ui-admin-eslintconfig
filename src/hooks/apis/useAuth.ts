import { useApiRequest } from '@/hooks/http'
import type { LoginPayload, LoginResponse } from '@/types'

export const useAuthApi = {
  // 登入使用
  login: (payload: LoginPayload): LoginResponse => {
    return useApiRequest.post({
      url: '/auth/login/',
      data: payload
      // withCredentials: true
    })
  },
  // 驗證需要權限的頁面使用
  authPermission: (): LoginResponse => {
    return useApiRequest.get({
      url: '/auth/'
    })
  }
}
