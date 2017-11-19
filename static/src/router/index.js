import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import homePage from '@/views/Home'
import hotPage from '@/views/Hot'
import newPage from '@/views/New'
import aboutPage from '@/views/about'
import guidePage from '@/views/guide'
import postPage from '@/views/Post'
import CatePage from '@/views/Cate' // 进入某个分类
import TagPage from '@/views/Tag' // 展示所有标签

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkExactActiveClass:"weui-bar__item_on",

    routes: [
        {
            path:'/',
            name: 'home',
            redirect: '/hot'
        },      
        {
            path:'/hot',
            name: 'hot',
            component:hotPage
        },
        {
            path:'/new',
            component:newPage
        },
        {
            path:'/post',
            component:postPage
        },
        {
            path:'/tags', 
            name: 'tags',
            component:TagPage
        },
        {
            path:'/cate/:id', 
            name: 'cate',
            component:CatePage
        },
        {
            path:'/about', 
            name: 'about',
            component:aboutPage
        },
        {
            path:'/guide', 
            name: 'guide',
            component:guidePage
        }
  ]
})
