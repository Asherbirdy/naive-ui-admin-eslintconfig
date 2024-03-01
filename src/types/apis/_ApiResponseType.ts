export interface OptimusQaApiResponse<T> {
  success: boolean
  data?: T
}

export interface OptimusQaBotResponse<T> {
  data?: {
    code: number | null
    success: boolean
    data: T
    message: string
  }
}