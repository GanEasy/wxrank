// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


import axios from 'axios'
import VueAxios from 'vue-axios'

import VueLazyload from 'vue-lazyload'


import VueTimeago from 'vue-timeago'

import 'weui/dist/style/weui.min.css'
// import 'swiper/dist/css/swiper.css'

// var VueAwesomeSwiper = require('vue-awesome-swiper')


Vue.use(VueTimeago, {
    name: 'timeago', // component name, `timeago` by default
    locale: 'zh-CN',
    locales: {
        // you will need json-loader in webpack 1
        'zh-CN': require('vue-timeago/locales/zh-CN.json')
    }
})

Vue.use(VueAxios, axios)
Vue.use(VueLazyload)




// mount with global
// Vue.use(VueAwesomeSwiper)

// router.afterEach(function () {
//     alert("after");
//     });

    router.beforeEach((to, from, next) => {

        var __to = localStorage.getItem("__to")||''
        // to 和 from 都是 路由信息对象
        if(to.path != from.path && __to !=to.path ){
          localStorage.removeItem("hot_articles")
          localStorage.removeItem("hot_page")
          localStorage.removeItem("new_articles")
          localStorage.removeItem("new_page")
        //   console.log("clear cache")
        }
        
        localStorage.setItem("__to",to.path)
        // console.log(to.path, from.path)
        next()
      })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
