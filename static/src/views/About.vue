<template>

   <div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">文字组合列表</div>
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">标题一</h4>
                    <p class="weui-media-box__desc">
声明：
本平台实时资讯数据来源均出自微信公众号，
只提供信息跳转服务，
所有数据均不含资讯正文内容。
文章观点仅代表来源公众号所属者，不代本平台立场。
本平台不对其信息的真实性、科学性等作任何形式的保证。

                    </p>
                </div>
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">标题二</h4>
                    <p class="weui-media-box__desc">
                      如果您有优质微信公众号要分享，请提交其中一篇文章链接。

                    <input type="text">

通过审核的文章，我们将会关注其微信公众号并收录其后续文章。


 若您需要反馈，请输入您的邮箱。
 <input type="text">

                    </p>
                </div>
            </div>
            <div class="weui-panel__ft">
                <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                    <div class="weui-cell__bd">查看更多</div>
                    <span class="weui-cell__ft"></span>
                </a>    
            </div>
        </div>
</template>

<script>
import news from '../api/news.js';

  export default {
    name: 'app',
    data(){
        return{
           url:""
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
      
    }
  }
</script>
