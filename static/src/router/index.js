import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import homePage from '@/views/Home'
import newPage from '@/views/New'
import postPage from '@/views/Post'

Vue.use(Router)

export default new Router({
    linkExactActiveClass:"weui-bar__item_on",

    routes: [
        {
            path:'/',
            component:homePage
        },
        {
            path:'/new',
            component:newPage
        },
        {
            path:'/post',
            component:postPage
        }
  ]
})
