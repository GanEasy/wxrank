//search.vue
<template>

<div>


<div class="weui-panel_access">
   <!--<div class="weui-panel__hd">
    <span>
      跟读微信文章
    </span>
    

    <label for="weuiAgree" class="weui-agree">
        
              <router-link class="weui-agree__text" :to="{ name: 'tags'}">全部分类 </router-link>

    </label>
  </div> -->
  <weui-search v-model="q"  @on-submit="onSubmit"  :result="defaultResult" ></weui-search>

  <ArticleList :articles="articles"></ArticleList>

    <infinite-loading @infinite="infiniteHandler" :distance="distance" ref="infiniteLoading">

    <div slot="spinner" class="weui-loadmore">
        <i class="weui-loading"></i>
    </div>

    <div slot="no-results" class="weui-loadmore weui-loadmore_line">
      <span class="weui-loadmore__tips">搜索不到内容!</span>
    </div>

    <div slot="no-more" class="weui-loadmore weui-loadmore_line">
      <span class="weui-loadmore__tips">到底了!</span>
    </div>

  </infinite-loading> 

</div>
    

</div>


</template>
<style>
.article-title{
  color: #000;
}
.refresh{
    width:30px;
    height: 30px;
    line-height: 30px;
    bottom: 50px;
    right: 30px;
    z-index: 10;
    position: fixed;
    cursor: pointer;
}
.category{
    width:30px;
    height: 30px;
    line-height: 30px;
    bottom: 10px;
    right: 30px;
    z-index: 10;
    position: fixed;
    cursor: pointer;
} 
</style>
<script>

import ArticleList from '@/components/ArticleList'
import WeuiSearch from '@/components/weui/Search';
import InfiniteLoading from 'vue-infinite-loading'
import api from '../api';

export default {
  
  name: 'indexP',
  
  
    components: {
      WeuiSearch,
      InfiniteLoading,
      ArticleList
    },
    data () {
      return {
        q:'',
        recommend:false,
        articles: [],
        distance: 200,
        page:0,
        showload:false,
        rank:0, // 当前下拉文章最低rank
        loading:false,
        cate: 0,
        err:'',
        defaultResult:[],

      }
    },
   
    mounted() {
      this.q = this.$route.query.q
    },
    methods: {

      onSubmit () {
        
        this.$router.push({ name: 'search', query: { q: this.q }})
      },

      refresh:function(){
        var site = this
        setTimeout(function(){
          site.articles= []
          site.rank=0
          site.$refs.infiniteLoading.stateChanger.reset()
        }, 50);
        return true
      },

      infiniteHandler: function ($state) {
        var site = this
        if(!site.loading){
          if (this.articles.length > 500) {
            $state.complete();
          } else {
            /** load data start */
            setTimeout(function(){
              site.loading = true
              var uri = '/search?limit=10&rank='+site.rank+'&s='+site.q;
              api.get(uri,function(err,data){
                if(data && data.length>0){
                  for(var t=0;t<data.length;t++){
                    site.articles.push(data[t])
                  }
                  site.rank = data[(data.length-1)].Rank
                  $state.loaded();
                  site.page ++
                }else{
                  $state.complete();
                }
                site.loading = false // 加载完成
              })
            }, 200);
            /** load data end */
          }
        }
      },
       

    },

    computed: {
      searchQurery () {
        return this.q
      },
      searchTips () {
        return '搜索'
      }
    },
   
    watch:{
      '$route' (to, from) {
          this.q = this.$route.query.q
          this.refresh()
      }
    }
}
</script>



