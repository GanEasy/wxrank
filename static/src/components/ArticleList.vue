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
                <img class="weui-media-box__thumb"  :src="article.Cover" >
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
</div>


</template>
<style>

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



