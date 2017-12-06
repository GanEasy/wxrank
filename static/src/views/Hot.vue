//index.vue
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

  
  <ArticleList :articles="articles"></ArticleList>

    <infinite-loading @infinite="infiniteHandler" :distance="distance" ref="infiniteLoading">

    <div slot="spinner" class="weui-loadmore">
        <i class="weui-loading"></i>
    </div>

    <div slot="no-results" class="weui-loadmore weui-loadmore_line">
      <span class="weui-loadmore__tips">载入失败!</span>
    </div>

    <div slot="no-more" class="weui-loadmore weui-loadmore_line">
      <span class="weui-loadmore__tips">到底了!</span>
    </div>

  </infinite-loading> 

</div>


</div>


</template>
<style>

</style>
<script>

import ArticleList from '@/components/ArticleList';
import InfiniteLoading from 'vue-infinite-loading'
import api from '../api';

export default {
  
  name: 'indexP',
  
  
    components: {
      InfiniteLoading,
      ArticleList
    },
    data () {
      return {
        articles: [],
        distance: 200,
        page:0,
        showload:false,
        rank:0, // 当前下拉文章最低rank
        loading:false,
        cate: 0,
        err:'',

      }
    },
    // beforeRouteEnter (to, from, next) {
    //   console.log('beforeRouteEnter',to.params.id)
    //   this.refresh()
    //   var uri = '/hot?limit=10&rank=0&tag='+to.params.id;
    //   api.get(uri, (err, post) => {
    //     next(vm => vm.setData(err, post))
    //   })
    // },
    // // 路由改变前，组件就已经渲染完了
    // // 逻辑稍稍不同
    // beforeRouteUpdate (to, from, next) {
      
    //   console.log('beforeRouteUpdate',to.params.id)
    //   // this.post = null
    //   // getPost(to.params.id, (err, post) => {
    //   //   this.setData(err, post)
    //   //   next()
    //   // })
    // },

    // beforeRouteUpdate (to, from, next) {
    // // react to route changes...
    // // don't forget to call next()
    // console.log('beforeRouteUpdate',to.params.id, from, next)
    // },
    mounted() {
      if (this.$route.params.id != undefined){
        this.cate = this.$route.params.id
      }
    },
    methods: {

      // setData (err, articles) {
      //   if (err) {
      //     this.error = err.toString()
      //   } else {
      //     this.articles = articles
      //   }
      // },

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
                var uri = '/hot?limit=10&rank='+site.rank+'&tag='+site.cate;
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


   
    watch:{
      cate:function(){
        console.log(this.cate)
        this.refresh()
      },
      // '$route' (to, from) {
      //   console.log(to.params.id)
      //   if(to.params.id !=undefined){
      //     this.cate = to.params.id
      //   }else{
      //     this.cate = 0
      //   }
      //   // 对路由变化作出响应...
      // }
    }
}
</script>



