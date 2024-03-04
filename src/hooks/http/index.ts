import Axios from './axios/Axios'
import { baseUrl } from './config'
import _RequstInterceptors from './axios/requestInterceptors'

// ** OptimusQA 搜尋用的
export const useApiRequest = new Axios({
  directlyGetData: false, // 是否直接返回 data 數據
  baseURL: baseUrl,
  timeout: 1000 * 60 * 5, // 超時
  interceptors: _RequstInterceptors, // 定義攔截器
  abortRepetitiveRequest: true, // 是否取消重複請求
  retryConfig: {
    count: 0, // 重連次數
    waitTime: 0 // 每次重複請求間隔時間
  }
})

