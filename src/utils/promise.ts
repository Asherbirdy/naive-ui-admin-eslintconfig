interface ApiResponse<T> {
  success: boolean;
  data?: T;
  err?: any;
}

export const wrapPromise = async <T>(promise: Promise<T>): Promise<T | Error> => {
  return promise
    .then(data => data)
    .catch(err => err)
}

export const wrapPromiseWithStatus = async <T>(promise: Promise<T>): Promise<ApiResponse<T>> => {
  return promise
    .then(data => ({ success: true, data }))
    .catch(err => ({ success: false, err }))
}