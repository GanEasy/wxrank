//ListItem.vue 信息卡风格
<template>

   

      <a class="weui-media-box weui-media-box_appmsg" :href="article.URL" >
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb"   v-lazy="article.Cover" >
          </div>
          <div class="weui-media-box__bd">
            <p class="weui-media-box__desc article-title">{{article.Title}}</p> 
            <ul class="weui-media-box__info article-tags">
                <li class="weui-media-box__info__meta">{{article.Media.AppName}}</li>
                <li class="weui-media-box__info__meta"><timeago :since="article.PubAt" class="text-muted" locale="zh-CN"></timeago></li> 
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
        swiperOption: {
          slidesPerView: 'auto',
          initialSlide: 0,
          resistanceRatio: .00000000000001,
          slideToClickedSlide: true
        },
      }
    },
   
    methods: {


        like:function(article){
          var site = this
          site.showload = true
          api.get('/like/'+article.ID,function(err,data){
            article.Like = data.Like
            site.showload = false
          })
        },
        hate:function(article){
          var site = this
          site.showload = true
          api.get('/hate/'+article.ID,function(err,data){
            article.Hate = data.Hate     
            site.showload = false
          }) 
        },


        cliLink:function(article){
          var site = this
          site.showload = true
          setTimeout(function(){
            site.showload = false
            window.location.href = article.URL
          }, 200);
          api.get('/view/'+article.ID,function(err,data){
            // site.showload = false
            // window.location.href = article.URL
          })
        },



    }
}
</script>



