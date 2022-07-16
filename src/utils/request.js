import axios from 'axios'
// axios.create去创建一个axios实例
const service = axios.create({
  baseUrl: 'http://localhost:8080',
  timeout: 500 // 超时时间
})

// 响应拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data) {
      console.log(response.data)
      return response.data
    } else {
      return Promise.reject(new Error('请求失败'))
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default service
