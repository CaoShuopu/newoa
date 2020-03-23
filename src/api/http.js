// 公用逻辑的封装
import Vue from 'vue'
import axios from 'axios'
import Md5 from 'js-md5'
// import { Base64 } from 'js-base64' // 暂无需解密记住密码
import router from '../router'
// import store from '../store'

// 不关闭浏览器情况下，快捷登陆
let token = localStorage.getItem('token') || ''

// 登录操作，登录成功做本地处理并将请求成功的数据进行返回
export const handleLogin = ({ nickname, password, remember }) => {
  // 从本地获取登录标识登录标识
  const userPassMd5 = Md5(password).toUpperCase()
  return axios.post('/xktadminservice/login', Vue.prototype.$qs.stringify({
    nickname: nickname,
    password: userPassMd5
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      version: '2.0',
      terminal: 'pc'
    }
  }).then(({ data: zData }) => {
    if (zData.code === 200) {
      token = zData.data.token
      localStorage.setItem('token', token)
      localStorage.setItem('userId', zData.data.userId)
      sessionStorage.setItem('token', token)
      sessionStorage.setItem('userId', zData.data.userId)
      return Promise.resolve(zData.data)
    } else {
      return Promise.reject(zData.data)
    }
  }).catch(() => {
    return Promise.reject('登陆失败')
  })
}

export const http = httpParams => {
  let { url, data, method } = { url: '', data: {}, method: 'POST', ...httpParams }
  try {
    return axios({
      baseURL: httpParams.baseURL || '/xktadminservice',
      url,
      method,
      data: Vue.prototype.$qs.stringify(data),
      headers: setHeaders()
    }).then((zData) => handleResponse(zData.data))
  } catch (err) {
    Vue.prototype.$message({
      type: 'error',
      message: err
    })
  }
}

function handleResponse (data) {
  if (data.code !== 200) {
    if (data.code === 20100) {
      router.push('/Login')
    }
    return Promise.reject(data.message)
  } else {
    return Promise.resolve(data)
  }
}

export function setHeaders () {
  return {
    'Content-Type': 'application/x-www-form-urlencoded',
    version: '2.0',
    terminal: 'pc',
    token: localStorage.getItem('token') || sessionStorage.getItem('token') || '',
    userId: localStorage.getItem('userId') || sessionStorage.getItem('userId') || ''
  }
}

export const postData = ({ url, data }) => {
  return http({ url, data, method: 'POST' })
}
