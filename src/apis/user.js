// 引入我们的基准路径 
import myaxios from '@/utils/myaxios.js'

// 用户登录 直接暴露
export const Login = (data) => {
    return myaxios({
        method: 'post',
        url: 'login',
        data

    })
}

