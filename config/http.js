import axios from 'axios'

let http = axios.create({
  baseURL: '',
  timeout: 10000, // 会话超时时间
  withCredentials: true, // 跨域请求是否使用此凭证
  crossDomain: true, //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
  retry : 4,
  retryDelay : 1000//设置全局的请求次数，请求的间隙
})

// 请求拦截器,可以设置token信息
http.interceptors.request.use(config => {
  console.log('configddddddddd')
  return config
}, error => {
  console.log('error+++++++++', '请求失败')
})

http.interceptors.response.use(res => {
  console.log('res', res)
  return res
}, error => {
  console.log('err=>>>>>>>>>>', error)
})
export default http