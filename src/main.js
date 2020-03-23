import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import iView from 'iview'

import './style/index.less'

// 防抖处理
const on = Vue.prototype.$on
Vue.prototype.$on = function (event, func) {
  let previous = 0
  let newFunc = func
  if (event === 'click') {
    newFunc = function () {
      const now = new Date().getTime()
      if (previous + 1000 <= now) {
        func.apply(this, arguments)
        previous = now
      }
    }
  }
  on.call(this, event, newFunc)
}

Vue.use(iView, {
  // select: {
  //   arrow: 'md-arrow-dropdown',
  //   arrowSize: 30
  // },
  // cascader: {
  //   arrow: 'md-arrow-dropdown',
  //   arrowSize: 30
  // }
})

Vue.config.productionTip = false

Vue.prototype.$Message.config({
  duration: 5
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
