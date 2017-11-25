//index.vue
<template>

<div>


<div class="weui-panel weui-panel_access">
   <!--<div class="weui-panel__hd">
    <span>
      跟读微信文章
    </span>
    

    <label for="weuiAgree" class="weui-agree">
        
              <router-link class="weui-agree__text" :to="{ name: 'tags'}">全部分类 </router-link>

    </label>
  </div> -->

  <keep-alive>
    <List :cate="cate"></List>
  </keep-alive>

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

import List from '@/components/List';
import InfiniteLoading from 'vue-infinite-loading'
import news from '../api/news.js';

export default {
  
  name: 'indexP',
  
  
    components: {
      InfiniteLoading,
      List
    },
    data () {
      return {
        cate: 0,
      }
    },
    mounted() {
    },
    methods: {

       

    },


   
    watch:{
      cate:function(){
        console.log(this.cate)
      }
    }
}
</script>



