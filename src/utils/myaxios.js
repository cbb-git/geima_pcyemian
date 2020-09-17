// 引入axios 库
import axios from 'axios'

// 封装我们的基准路径  基准路径一定要封装 可能以后会改
axios.defaults.baseURL = 'http://127.0.0.1:3000'
 
// 拦截器

// 暴露
export default axios