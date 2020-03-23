import Home from '@/views/Home'
// 主路由
const mainRoutes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    redirect: '/zongZhiBusiness'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  }
]

export default [
  ...mainRoutes
]
