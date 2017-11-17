//index.vue
<template>

<div>

<swiper :options="swiperOption" ref="swiper">
  <swiper-slide class="menu">Menu slide</swiper-slide>
  <swiper-slide class="content">
    
    Content slide
  </swiper-slide>
</swiper>


<!-- <swiper :options="swiperOption" ref="swiper">
  <swiper-slide class="content">
    <div class="menu-button" :class="{ 'cross': menuCross }" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    Content slide
  </swiper-slide>
  <swiper-slide class="menu">Menu slide</swiper-slide>
</swiper> -->

 <!--  <swiper :options="swiperOption">
        <swiper-slide>
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" alt="">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">标题一</h4>
                        <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                    </div>
                </a>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
       <div class="swiper-pagination" slot="pagination"></div> 
      </swiper>-->

  <!-- swiper
  <swiper :options="swiperOption">
    <swiper-slide><img src="http://pic3.readfollow.com/aHR0cDovL21tYml6LnFwaWMuY24vbW1iaXpfanBnL3hnRGlhUm5RTm92RWxVanoyaWFlN0xzME1aRlNUTzdGOTBIYmViM01pYVI0RVhVZHJ2VDRueE54b3AzS0ppY2pYc1dKcUpEdjlYQmF1OHZsMHRhYlBoQ1RtUS8wP3d4X2ZtdD1qcGVn"></swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>--> 
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__hd">文博最新文章</div>  
    <div class="weui-panel__bd">

     <!-- <div class="weui-media-box weui-media-box_text">
          <h4 class="weui-media-box__title">标题一</h4>
          <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
          <ul class="weui-media-box__info">
              <li class="weui-media-box__info__meta">文字来源</li>
              <li class="weui-media-box__info__meta">时间</li>
              <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">其它信息</li>
          </ul>
      </div> -->

        <div class="weui-media-box weui-media-box_appmsg"  v-for="article in articles" :key="article.id">
          
            <div class="weui-media-box__hd">
                  <a  v-bind:href="[article.URL]" v-on:click="cliLink(article)" >
                    <img class="weui-media-box__thumb"  v-lazy="article.Cover" >
                  </a>  
            </div>
            <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title">{{article.Title}}</h4>
                <p class="weui-media-box__desc">{{article.Intro}}</p>
                <!-- <ul class="weui-media-box__info">
                    <li class="weui-media-box__info__meta">{{article.AppName}}</li>
                     <li class="weui-media-box__info__meta">{{article.Author}}</li> 
                    <li class="weui-media-box__info__meta weui-media-box__info__meta_extra"><timeago :since="article.PubAt" class="text-muted" locale="zh-CN"></timeago></li>
                </ul> -->
            </div>
        </div>
        
    </div>
    
      <infinite-loading @infinite="infiniteHandler" :distance="distance" ref="infiniteLoading">


      <div slot="spinner" class="weui-loadmore">
          <i class="weui-loading"></i>
          <span class="weui-loadmore__tips">正在加载</span>
      </div>

      <div slot="no-results" class="weui-loadmore weui-loadmore_line">
        <span class="weui-loadmore__tips">暂无数据</span>
      </div>
      <div slot="no-more" class="weui-loadmore weui-loadmore_line">
        <span class="weui-loadmore__tips">到底啦！</span>
      </div>

      
      </infinite-loading> 
  </div>
</div>

</template>

<style scoped>
  /* .swiper-slide {
    width: 80%;
  }
  .swiper-slide:nth-child(2n) {
    width: 60%;
  }
  .swiper-slide:nth-child(3n) {
    width: 40%;
  } */
  .menu {
    min-width: 100px;
    width: 70%;
    max-width: 320px;
    background-color: #2C8DFB!important;
    color: #fff;
  }
  .content {
    width: 100%;
  }
  .menu-button {
    position: absolute;
    top: 0px; left: 0px;
    padding: 15px;
    cursor: pointer;
    -webkit-transition: .3s;
    transition: .3s;
    background-color: #2C8DFB;
    /*margin: 14px;
    border-radius: 5px;*/
  }
  .menu-button .bar:nth-of-type(1) {
    margin-top: 0px;
  }
  .menu-button .bar:nth-of-type(3) {
    margin-bottom: 0px;
  }
  .bar {
    position: relative;
    display: block;
    width: 50px;
    height: 5px;
    margin: 10px auto;
    background-color: #fff;
    border-radius: 10px;
    -webkit-transition: .3s;
    transition: .3s;
  }
  .menu-button:hover .bar:nth-of-type(1) {
    -webkit-transform: translateY(1.5px) rotate(-4.5deg);
    -ms-transform: translateY(1.5px) rotate(-4.5deg);
    transform: translateY(1.5px) rotate(-4.5deg);
  }
  .menu-button:hover .bar:nth-of-type(2) {
    opacity: .9;
  }
  .menu-button:hover .bar:nth-of-type(3) {
    -webkit-transform: translateY(-1.5px) rotate(4.5deg);
    -ms-transform: translateY(-1.5px) rotate(4.5deg);
    transform: translateY(-1.5px) rotate(4.5deg);
  }
  .cross .bar:nth-of-type(1) {
    -webkit-transform: translateY(15px) rotate(-45deg);
    -ms-transform: translateY(15px) rotate(-45deg);
    transform: translateY(15px) rotate(-45deg);
  }
  .cross .bar:nth-of-type(2) {
    opacity: 0;
  }
  .cross .bar:nth-of-type(3) {
    -webkit-transform: translateY(-15px) rotate(45deg);
    -ms-transform: translateY(-15px) rotate(45deg);
    transform: translateY(-15px) rotate(45deg);
  }
  .cross:hover .bar:nth-of-type(1) {
    -webkit-transform: translateY(13.5px) rotate(-40.5deg);
    -ms-transform: translateY(13.5px) rotate(-40.5deg);
    transform: translateY(13.5px) rotate(-40.5deg);
  }
  .cross:hover .bar:nth-of-type(2) {
    opacity: .1;
  }
  .cross:hover .bar:nth-of-type(3) {
    -webkit-transform: translateY(-13.5px) rotate(40.5deg);
    -ms-transform: translateY(-13.5px) rotate(40.5deg);
    transform: translateY(-13.5px) rotate(40.5deg);
  }
</style>
<script>

import InfiniteLoading from 'vue-infinite-loading'
import news from '../api/news.js';

export default {
  
  name: 'indexP',
  
  
    components: {
      InfiniteLoading
    },
    data () {
      return {
        articles: [],
        distance: 0,
        page:0,
        // swiperOption: {
        //   pagination: '.swiper-pagination',
        //   paginationClickable: true
        // }
      }
    },
    mounted() {
      // var api = 'http://localhost:8888/hot?limit=2';
      // var site = this
      // news.getNew(api,function(err,data){
      //       site.articles = data
      // })
      
      this.articles = JSON.parse(window.localStorage.getItem("new_articles"))||[]
      this.page = parseInt(window.localStorage.getItem("new_page")) || 0
    },
    methods: {

        cliLink:function(article){
          console.log(article)
          // alert(article.ID)
          return false
        },

        like:function(article){
          news.like(article.ID,function(err,data){
            article.Like = data.Like
          })
        },
        hate:function(article){
            news.hate(article.ID,function(err,data){
               article.Hate = data.Hate
            }) 
        },

        infiniteHandler: function ($state) {

          if (this.articles.length > 20) {
            $state.complete();
            // console.log("dont...");
          } else {

            //  setTimeout(function () {
              // console.log("dododododo...");

              var api = '/new?limit=5&offset='+this.page*5;
              var site = this
              news.getNew(api,function(err,data){
                if(data.length>0){
                  for(var t=0;t<data.length;t++){
                    site.articles.push(data[t])
                  }
                  $state.loaded();
                  site.page ++
                }else{
                  $state.complete();
                }
              })
            // }.bind(this), 1000);
          }
        },

    },

  watch:{
      articles:function(){
        localStorage.setItem("new_articles",JSON.stringify(this.articles))
        localStorage.setItem("new_page",this.page)
      },
    }
}
</script>



