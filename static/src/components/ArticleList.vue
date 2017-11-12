//ArticleList.vue
<template>
<div>

  <div id="loadingToast" v-if="showload">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
      <i class="weui-loading weui-icon_toast"></i>
      </div>
  </div>

  <div class="weui-panel__bd">
      <a class="weui-media-box weui-media-box_appmsg" v-on:click="cliLink(article)"  v-for="article in articles" :key="article.id">
          <div class="weui-media-box__hd">
                <img class="weui-media-box__thumb"   v-lazy="article.Cover" >
          </div>
          <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">{{article.Title}}</h4>
              <p class="weui-media-box__desc">{{article.Intro}}</p>
          </div>
      </a>
  </div>
  
    <infinite-loading @infinite="infiniteHandler" :distance="distance" ref="infiniteLoading">

    <div slot="spinner" class="weui-loadmore">
        <i class="weui-loading"></i>
    </div>

    <div slot="no-results" class="weui-loadmore weui-loadmore_line">
      <span class="weui-loadmore__tips">暂无数据!</span>
    </div>

    <div slot="no-more" class="weui-loadmore weui-loadmore_line">
      <span class="weui-loadmore__tips">无法加载更多数据!</span>
    </div>


    </infinite-loading> 

<!-- 
    <div class="refresh"  v-on:click="refresh">
      <svg class="icon" width="20px" height="20.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(0, 8, 255, 0.57)" d="M958.174805 481.820654c-1.017166-35.661198-5.421476-91.061972-32.872688-144.119375L774.270309 509.142929l125.009132 0c0.002047 0.827855 0.00307 1.650593 0.00307 2.51017 0 213.726709-173.881213 387.607922-387.607922 387.607922-213.727733 0-387.608945-173.881213-387.608945-387.607922 0-210.105229 181.584662-387.608945 396.521942-387.608945 39.323611 0 78.106916 5.861498 115.27442 17.421788l17.693987-56.888661c-42.902112-13.343913-87.639013-20.10899-132.968407-20.10899-60.358693 0-119.340015 11.80486-175.303608 35.0861-54.135968 22.520923-102.939487 54.68139-145.05263 95.588055-42.355667 41.141002-75.673493 88.934518-99.028411 142.051273-24.360827 55.404867-36.713156 114.100688-36.713156 174.459381 0 119.447463 46.515407 231.745085 130.977054 316.207755C279.929504 912.322501 392.227126 958.837908 511.674589 958.837908c119.447463 0 231.745085-46.515407 316.207755-130.977054s130.977054-196.760293 130.977054-316.207755C958.859397 499.757165 958.672132 490.187205 958.174805 481.820654z" /></svg>
    </div>
    <div class="category">
      <router-link class="weui-agree__text" :to="{ name: 'tags'}">
        <svg class="icon" width="20px" height="20.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(0, 8, 255, 0.57)" d="M63.97608 877.236402 63.97608 723.281007l894.866944 0 0 153.955394L63.97608 877.236402zM63.97608 434.615539l894.866944 0 0 153.955394L63.97608 588.570933 63.97608 434.615539zM63.97608 145.949047l894.866944 0L958.843024 299.903417 63.97608 299.903417 63.97608 145.949047z" /></svg>  
      </router-link>
    </div> -->


</div>


</template>
<style>
/* .refresh{
    bottom: 60px;
    right: 30px;
    z-index: 10;
    position: fixed;
    cursor: pointer;
}
.category{
    bottom: 20px;
    right: 30px;
    z-index: 10;
    position: fixed;
    cursor: pointer;
} */
</style>
<script>

import InfiniteLoading from 'vue-infinite-loading'
import news from '../api/news.js';

export default {
  
  name: 'ArticleList',
  
  
    components: {
      InfiniteLoading
    },

    props: ['cate'],

    data () {
      return {
        articles: [],
        distance: 200,
        page:0,
        showload:false,
      }
    },
    mounted() {
      this.articles = JSON.parse(window.localStorage.getItem("articles"))||[]
      this.page = parseInt(window.localStorage.getItem("page")) || 0
      // alert(this.cate)
    },
    methods: {

        cliLink:function(article){
        var site = this
         site.showload = true
          setTimeout(function(){
            site.showload = false
            window.location.href = article.URL
          }, 200);
          news.view(article.ID,function(err,data){
            // site.showload = false
            // window.location.href = article.URL
          })

        },

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
              var api = '/article?limit=10&offset='+this.page*10+'&tag='+this.cate;
              var site = this

              setTimeout(function(){
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
              }, 200);
            // }.bind(this), 1000);
          }
        },

    },


    watch:{
      articles:function(){
        localStorage.setItem("articles",JSON.stringify(this.articles))
        localStorage.setItem("page",this.page)
      }
    }
}
</script>



