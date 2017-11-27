//ListItem.vue 信息卡风格
<template>


      <a class="weui-media-box weui-media-box_appmsg" :href="article.URL">
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb"   v-lazy="article.Cover" >
          </div>  
          <div class="weui-media-box__bd">
            <p class="weui-media-box__desc article-title">{{article.Title}}</p> 
            <ul class="weui-media-box__info article-tags">
              <li class="weui-media-box__info__meta">{{article.Media.AppName}}</li> 
              <li class="weui-media-box__info__meta"><timeago :since="article.PubAt" class="text-muted" locale="zh-CN"></timeago></li>
              <!-- <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">
                <span v-on:click="link(article)">⇧ 1122{{article.Like-article.Hate}}</span>
                <span v-on:click="hate(article)">⇩</span>
              </li>  -->
            </ul>
          </div>
      </a>

       

</template>
<style>
.item-title{
  
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: 15px;
    color: #000;

}
.item-tags{
  margin-top: 10px
}
</style>
<script>

import api from '../api/api.js';

export default {
  
  name: 'ListItem',


    props: ['article'],
    // props: ['article','swiperOption'],

    data () {
      return {
        
      }
    },
   
    methods: {
      
        like:function(article){
          var site = this
          site.showload = true
          news.get('/like/'+article.ID,function(err,data){
            article.Like = data.Like
            site.showload = false
          })
        },
        hate:function(article){
          var site = this
          site.showload = true
          news.get('/hate/'+article.ID,function(err,data){
            article.Hate = data.Hate     
            site.showload = false
          }) 
        },

    }
}
</script>



