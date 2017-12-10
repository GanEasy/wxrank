//index.vue
<template>
<weui-search v-model="value" :result="defaultResult" :placeholder="placeholder" @result-click="resultClick" @on-submit="onSubmit"></weui-search>
</template>
<style>

</style>
<script>

import api from '../api';
import WeuiSearch from '@/components/weui/Search';
export default {
  
  name: 'indexP',

    props: {
      placeholder: {
        type: String,
        default: '搜索'
      },
      recommend: {
        type: Boolean,
        default: true
      }, 
      recommendType: {
        type: String,
        default: 'wxid'
      }, 
    },

    components: {
      WeuiSearch
    },
    data () {
      return {
        value: '',
        defaultResult: [
        ]
      }
    },

    methods: {
      onSubmit () {
        console.log(this.value)
        
        this.$router.push({ name: 'search', query: { q: this.value }})
      },
      resultClick (item) {
        console.log(item)
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      GetCate:function(){
        var site = this
        api.get("/tags?type=cate",function(err,data){
          site.category = data
        })
      },
    },

    watch:{
      value:function(val){
        var site = this
        if(this.recommend){
          if (val!=''){
            if(this.recommendType=='wxid'){
              api.get("/searchtags?s="+val+"&limit=5",function(err,data){
                site.defaultResult = data
              })
            }
          }else{
            site.defaultResult = []
          }
        }
      }
    }

}
</script>



