<template>
<div>
    <div class="weui-cells__title">自助服务 > 提交文章</div>


    <div class="weui-cells__title">请粘贴待分享文章链接地址</div>

    <weui-textarea placeholder="如果您有优质微信公众号文章要分享，请提交其文章链接，通过审核后将收录、展示。" :value="text"></weui-textarea>


    <div class="weui-btn-area">
        <a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">确定</a>
    </div>
</div>
</template>

<script>
import news from '../../api/news.js';
import WeuiTextarea from '@/components/weui/Textarea';

  export default {
    name: 'app',
    data(){
        return{
           url:"",
           text:""
        }
    },
    methods: {
       submit: function(event) {
            
              news.post(this.url,function(err,data){
                if(data == "0"){
                  alert("收录失败")
                }else{
                  alert("收录成功")
                }
              });

           
        }
        
    },
    components: {
      'weui-textarea':WeuiTextarea
    }
  }
</script>
