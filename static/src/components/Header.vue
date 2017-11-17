<template>

<div>
    <!-- <div class="weui-navbar">
          <router-link class="weui-navbar__item"  to="/">文博</router-link>
          <router-link class="weui-navbar__item"  to="/new">最新</router-link> 
          <router-link class="weui-navbar__item" to="/post">分享</router-link>

    </div> 
 -->
      <!--  <div class="page__hd">
        <h1 class="page__title">ReadFollow.com</h1>
     <p class="page__desc">跟读微信文章</p> 
    </div>
-->
    <!--
    <div class="weui-grids">

    <a href="javascript:;" class="weui-grid">
        <p class="weui-grid__label">
            文博资讯
        </p>
    </a>
    <a href="javascript:;" class="weui-grid">
        <p class="weui-grid__label">
            IT/互联
        </p>
    </a>
    <a href="javascript:;" class="weui-grid">
        <p class="weui-grid__label">
            汽车频道
        </p>
    </a>
  </div>
  -->

    <div class="weui-panel__hd">

        <div class="weui-flex navber">
          <router-link class="weui-flex__item"  :to="{ name: 'hot'}">
            热门
          </router-link>
          <router-link class="weui-flex__item" :to="{ name: 'cate', params: { id: cate.ID }}" v-for="cate in category" :key="cate.ID">
             {{cate.Title}}
          </router-link>
        </div>
    </div>
</div>
</template>
<style>

.navber{
    text-align: center;
}
.navber a{
    color: #999
}
.router-link-active{
    font-weight: bold;  
}
.navber .router-link-active{
    color: #00a06a;
    font-weight: bold;  
}

.page__hd {
    padding: 40px;
}
.weui-navbar__item.weui-bar__item_on{
  background-color:white;
  color: red;
}


.weui-media-box_appmsg .weui-media-box__hd{
      width: 80px;
}
.weui-navbar__item {
    position: relative;
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding: 13px 0;
    text-align: center;
    font-size: 15px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
</style>

<script>
import news from '../api/news.js';

  export default {

    props: {
      title: {
        type: String
      },
      backTo: {
        type: String,
        default: '/hot'
      }
    },  
    data () {
      return {
        tags: [],
        category: []
      }
    },
    methods: {
        GetCate(){
          var site = this
          news.get("/tags?type=cate",function(err,data){
            site.category = data
          })
        },
      back () {
        this.$router.push(this.backTo)
      }
    },
        
    mounted() {
        this.GetCate()
    },
  }
</script>