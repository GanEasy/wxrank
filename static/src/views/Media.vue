//index.vue
<template>

<div>


<div class="weui-panel weui-panel_access">
   <div class="weui-panel__hd">
    <span>
      {{tag.Title}}
    </span>
    
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
  
  name: 'indexP',
  
  
    components: {
      InfiniteLoading,
      ArticleList
    },
    data () {
      return {
        id:0,
        cate: 0,
        media: [],
        tag: [],
      }
    },
    mounted() {
      this.id = this.$route.params.id
      this.getTagByMediaID()
    },
    methods: {
      getMedia:function(){
        var site = this
        news.getNew("/media/"+site.id,function(err,data){
          site.media = data
        })
      },
      getTagByMediaID:function(){
        var site = this
        news.getNew("/gettagbymedia/"+site.id,function(err,data){
          site.tag = data
          site.cate = data.ID
        })
      }
    },


    watch:{
      cate:function(){
        console.log("media::",this.cate)
      },
      id:function(){
        console.log(this.id)
      }
    }
}
</script>



