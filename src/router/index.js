import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  routes
})

// 全局守卫，在每次路由改变的时候都会调用
router.beforeEach((to, from, next) => {
  // 可能会做路由跳转处理
})

export default router
