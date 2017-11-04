//index.vue
<template>


<div class="weui-panel weui-panel_access">
  <div class="weui-panel__hd">文博热门文章</div>
  <div class="weui-panel__bd">
      <a class="weui-media-box weui-media-box_appmsg"  v-for="article in articles" :key="article.id">
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
      </a>
      
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
        distance: 200,
        page:0,
      }
    },
    mounted() {
      // var api = 'http://localhost:8888/hot?limit=2';
      // var site = this
      // news.getNew(api,function(err,data){
      //       site.articles = data
      // })
      this.articles = JSON.parse(window.localStorage.getItem("hot_articles"))||[]
      this.page = parseInt(window.localStorage.getItem("hot_page")) || 0
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

          if (this.articles.length > 500) {
            $state.complete();
            // console.log("dont...");
          } else {

            //  setTimeout(function () {
              // console.log("dododododo...");

              var api = '/hot?limit=5&offset='+this.page*5;
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
        localStorage.setItem("hot_articles",JSON.stringify(this.articles))
        localStorage.setItem("hot_page",this.page)
      },
      }
}
</script>



