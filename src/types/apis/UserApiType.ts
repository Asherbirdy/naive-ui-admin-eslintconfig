import type { AxiosResponse } from 'axios'

export interface ShowCurrentUserData {
  user: {
    name: string
    role: string
    userId: string
  }
}

export type ShowCurrentUserResponse = Promise<AxiosResponse<ShowCurrentUserData>>