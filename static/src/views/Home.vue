//index.vue
<template>

<div>
  <!--
 <div class="weui-flex">
            <div class="weui-flex__item"><div class="placeholder">文博</div></div>
            <div class="weui-flex__item"><div class="placeholder">汽车</div></div>
            <div class="weui-flex__item"><div class="placeholder">程序</div></div>
            <div class="weui-flex__item"><div class="placeholder">全部</div></div>
        </div>
-->
<div class="weui-panel weui-panel_access">
  <div class="weui-panel__hd">
    文博文章
    <label for="weuiAgree" class="weui-agree"  v-on:click="refresh()" >
        <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox" v-model="readhot" >
        <span class="weui-agree__text">
            偏好热门
        </span>
    </label>
  </div>



  <div class="weui-panel__bd">
      <a class="weui-media-box weui-media-box_appmsg" v-on:click="cliLink(article)"  v-bind:href="[article.URL]"  v-for="article in articles" :key="article.id">
          <div class="weui-media-box__hd">
                <!-- <img class="weui-media-box__thumb"  v-lazy="article.Cover" > -->
                <img class="weui-media-box__thumb"  :src="article.Cover" >
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


</div>


</template>
<style>
 .placeholder {
    margin: 5px;
    padding: 0 10px;
    background-color: #ebebeb;
    height: 2.3em;
    line-height: 2.3em;
    text-align: center;
    color: #cfcfcf;
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
        distance: 200,
        page:0,
        readhot:1,

      }
    },
    mounted() {
      // var api = 'http://localhost:8888/hot?limit=2';
      // var site = this
      // news.getNew(api,function(err,data){
      //       site.articles = data
      // })
      this.articles = JSON.parse(window.localStorage.getItem("articles"))||[]
      this.page = parseInt(window.localStorage.getItem("page")) || 0
      this.readhot = parseInt(window.localStorage.getItem("readhot")) || 0

    },
    methods: {

        cliLink:function(article){
          setTimeout(function(){
            window.location.href = article.URL
          }, 200);
          news.view(article.ID,function(err,data){
            window.location.href = article.URL
          })

        },
        // like:function(article){
        //   news.like(article.ID,function(err,data){
        //     article.Like = data.Like
        //   })
        // },
        // hate:function(article){
        //     news.hate(article.ID,function(err,data){
        //        article.Hate = data.Hate
        //     }) 
        // },


        refresh:function(){
          var site = this
          setTimeout(function(){
            site.articles= []
            site.page=0
            site.$refs.infiniteLoading.stateChanger.reset()
          }, 50);
          return true
        },

        infiniteHandler: function ($state) {

          if (this.articles.length > 500) {
            $state.complete();
            // console.log("dont...");
          } else {

            //  setTimeout(function () {
              // console.log("dododododo...");
              if (this.readhot) {
                var api = '/article?order=hot&limit=10&offset='+this.page*10;
              }else{
                var api = '/article?order=id&limit=10&offset='+this.page*10;
              }

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
        localStorage.setItem("articles",JSON.stringify(this.articles))
        localStorage.setItem("page",this.page)
      },
      readhot:function(){
        if(this.readhot){
        localStorage.setItem("readhot",1)
        }else{
        localStorage.setItem("readhot",0)
        }
        // this.refresh()

      }
    }
}
</script>



