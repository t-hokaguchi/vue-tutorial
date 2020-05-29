import axios from 'axios'

axios.defaults.withCredentials = true

const http = axios.create({
  timeoutSeconds: 5
})

http.interceptors.request.use(
  (c) => {
    const config = c
    // ここでリクエスト単位に設定したいhttp header属性を定義.
    // config.headers['csrf-token'] = 'token';
    return config
  },
  (error) => Promise.reject(error)
)

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 404) {
      // 共通的にステータスコードでハンドリングしたい場合はここに追加.
    }
    return error
  }
)
export default http