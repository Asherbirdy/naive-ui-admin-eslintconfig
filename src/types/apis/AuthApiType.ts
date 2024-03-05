import type { AxiosResponse } from 'axios'

// ** POST: auth/login
export interface LoginPayload {
  email: string
  password: string
}
export interface LoginResponseData {
  user: {
    name: string
    role: string
    userId: string
  }
  token: {
    accessTokenJWT: string
    refreshTokenJWT: string
  }

}
export type LoginResponse = Promise<AxiosResponse<LoginResponseData>>