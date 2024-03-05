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
  // 登出
  logout:() => {
    return useApiRequest.delete({
      url:'/auth/logout/'
    })
  },
  // 驗證需要權限的頁面使用
  authPermission: () => {
    return useApiRequest.get({
      url: '/auth/'
    })
  }
}
