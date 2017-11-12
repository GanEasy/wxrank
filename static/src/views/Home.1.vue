//index.vue
<template>

<div>

<!-- 
  <div id="actionSheet_wrap" v-if="showselect">
    <div class="weui-mask_transparent actionsheet__mask" id="mask" style="display: block"></div>
    <div class="weui-actionsheet weui-actionsheet_toggle" id="iosActionsheet">
        <div class="weui-actionsheet__title">
            <p class="weui-actionsheet__title-text">这是一个标题，可以为一行或者两行。</p>
        </div>
        <div class="weui-actionsheet__menu">
            <div class="weui-actionsheet__cell">示例菜单</div>
            <div class="weui-actionsheet__cell">示例菜单</div>
            <div class="weui-actionsheet__cell">示例菜单</div>
            <div class="weui-actionsheet__cell">示例菜单</div>
        </div>
        <div class="weui-actionsheet__action">
            <div class="weui-actionsheet__cell" id="iosActionsheetCancel"  v-on:click="showselect = false">取消</div>
        </div>
    </div>
  </div> -->


<div id="loadingToast" v-if="showload">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
    <i class="weui-loading weui-icon_toast"></i>
    </div>
</div>


<!-- <div class="weui-flex">
            <div class="weui-flex__item">
                <div class="page__hd">
                    <h1 class="page__title" v-on:click="showselect = true">Rf</h1>
                </div>  
              </div>
            <div class="weui-flex__item">
              <scroll-picker :options="tags" v-model="selecttag"></scroll-picker>
            </div>
        </div>
     -->

 <!-- <div class="weui-flex">
            <div class="weui-flex__item">
                  <div class="weui-cell weui-cell_select">
                    <div class="weui-cell__bd">
                        <select class="weui-select"  v-model="selecttag"  @change="refresh">
                            <option v-for="tag in tags" v-bind:value="tag.value" :key="tag.value">  
                              {{ tag.text }}  
                            </option> 
                        </select>
                    </div>
                </div>
          </div>
            <div class="weui-flex__item" style="line-height:45px;padding-right:15px">
              <label for="weuiAgree" class="weui-agree"  v-on:click="refresh()" >
                  <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox" v-model="readhot" >
                  <span class="weui-agree__text">
                      偏好热门
                  </span>
              </label>
            </div>
        </div> -->



<div class="weui-panel weui-panel_access">
   <div class="weui-panel__hd">
    <span  v-on:click="shownav=!shownav">导航</span>
    

    <label for="weuiAgree" class="weui-agree"  v-on:click="refresh()" >
        <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox" v-model="readhot" >
        <span class="weui-agree__text">
            偏好热门
        </span>
    </label>
  </div> 

  
<div class="weui-grids" v-if="shownav">
        <a href="javascript:;" class="weui-grid">
            <p class="weui-grid__label">文博</p>
        </a>
        <a href="javascript:;" class="weui-grid">
           
            <p class="weui-grid__label">美食</p>
        </a>
        <a href="javascript:;" class="weui-grid">
            
            <p class="weui-grid__label">文学</p>
        </a>
        <a href="javascript:;" class="weui-grid">
            <p class="weui-grid__label">汽车</p>
        </a>
        <a href="javascript:;" class="weui-grid">
            
            <p class="weui-grid__label">计算机编程</p>
        </a>
        <a href="javascript:;" class="weui-grid">
            <p class="weui-grid__label">更多</p>
        </a>
        <div class="weui-cells__tips" style="text-align: right;">提交公众号</div>
    </div>
  <!-- <div class="page__bd">
        <div class="weui-cells__title">选择分类阅读</div>
        <div class="weui-cells weui-cells_radio">
            <label class="weui-cell weui-check__label" v-for="tag in tags" :key="tag.value">
                <div class="weui-cell__bd">
                    <p>{{tag.text}}</p>
                </div>
                <div class="weui-cell__ft">
                    <input type="radio" class="weui-check" v-bind:value="tag.value"  v-model="selecttag">
                    <span class="weui-icon-checked"></span>
                </div>
            </label>
        </div>

    </div> -->

<!--
        <div class="weui-cells weui-cells_radio">
            <label class="weui-cell weui-check__label" v-for="tag in tags" :key="tag.value">
                <div class="weui-cell__bd">
                    <p>{{tag.text}}</p>
                </div>
                <div class="weui-cell__ft">
                    <input type="radio" class="weui-check" v-bind:value="tag.value"  v-model="selecttag">
                    <span class="weui-icon-checked"></span>
                </div>
            </label>
        </div>
-->
  <div class="weui-panel__bd">
      <a class="weui-media-box weui-media-box_appmsg" v-on:click="cliLink(article)"  v-for="article in articles" :key="article.id">
          <div class="weui-media-box__hd">
                <!-- <img class="weui-media-box__thumb"  v-lazy="article.Cover" >  v-bind:href="[article.URL]" -->
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
    </div>

    <div slot="no-results" class="weui-loadmore weui-loadmore_line">
      <span class="weui-loadmore__tips">获取数据失败!</span>
    </div>

    <div slot="no-more" class="weui-loadmore weui-loadmore_line">
      <span class="weui-loadmore__tips">无法加载更多数据!</span>
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
.weui-toast{
    background: none;
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
        selecttag: 0,  
        shownav:false,
        tags: [  
          { name: '全部', value: 0 },  
          { name: '文博', value: 1 },  
          // { name: '编程技术', value: 2 },
          // { name: '汽车', value: 3 }  

          
        ]  ,
        articles: [],
        distance: 200,
        page:0,
        readhot:1,
        showload:false,
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
      this.selecttag = parseInt(window.localStorage.getItem("selecttag")) || 0
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
                var api = '/article?order=hot&limit=10&offset='+this.page*10+'&tag='+this.selecttag;
              }else{
                var api = '/article?order=id&limit=10&offset='+this.page*10+'&tag='+this.selecttag;
              }

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
      },    
      selecttag:function(){
        localStorage.setItem("selecttag",this.selecttag)
        this.refresh()
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



