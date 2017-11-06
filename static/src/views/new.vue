//index.vue
<template>

<div>
  <!-- swiper
  <swiper :options="swiperOption">
    <swiper-slide><img src="http://pic3.readfollow.com/aHR0cDovL21tYml6LnFwaWMuY24vbW1iaXpfanBnL3hnRGlhUm5RTm92RWxVanoyaWFlN0xzME1aRlNUTzdGOTBIYmViM01pYVI0RVhVZHJ2VDRueE54b3AzS0ppY2pYc1dKcUpEdjlYQmF1OHZsMHRhYlBoQ1RtUS8wP3d4X2ZtdD1qcGVn"></swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper> -->
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



