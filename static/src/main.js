// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'weui/dist/style/weui.min.css'
import 'swiper/dist/css/swiper.css'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


import axios from 'axios'
import VueAxios from 'vue-axios'

import VueLazyload from 'vue-lazyload'


import VueTimeago from 'vue-timeago'


var VueAwesomeSwiper = require('vue-awesome-swiper')

import VmBackTop from 'vue-multiple-back-top'


// import VueScrollPicker from 'vue-scroll-picker'

// Vue.use(VueScrollPicker)

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



Vue.component(VmBackTop.name, VmBackTop)

// mount with global
Vue.use(VueAwesomeSwiper)

// router.afterEach(function () {
//     alert("after");
//     });

    router.beforeEach((to, from, next) => {

        var __to = localStorage.getItem("__to")||''
        // to 和 from 都是 路由信息对象
        if(to.path != from.path && __to !=to.path ){
          localStorage.removeItem("articles")
          localStorage.removeItem("page")
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
