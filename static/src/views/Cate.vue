//index.vue
<template>

<div>




<div class="weui-panel weui-panel_access">
   <div class="weui-panel__hd">
    <span>{{tag.Title}}</span>
    


    <label for="weuiAgree" class="weui-agree">
        <router-link class="weui-agree__text" :to="{ name: 'tags'}">分类</router-link>
    </label>
  </div> 

  <ArticleList :cate="cate"></ArticleList>
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

import ArticleList from '@/components/ArticleList';
import InfiniteLoading from 'vue-infinite-loading'
import news from '../api/news.js';

export default {
  
  name: 'cateP',
  
  
    components: {
      InfiniteLoading,
      ArticleList,
      cate:[],
    },
    data () {
      return {
        cate: 0,
        tag:[]
      }
    },
    mounted() {
      this.cate = this.$route.params.id
      this.GetTagInfo()
    },
    methods: {
      GetTagInfo:function(){
          var site = this
          news.getNew("/tag/"+site.cate,function(err,data){
            site.tag = data
          })
      }
    },
}
</script>



