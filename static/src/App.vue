<template>
  <div id="app">
    <header-tab></header-tab>
    <router-view/>
        

    <!----> <vm-back-top :bottom="90" :timing="'ease'">
        <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(0, 8, 255, 0.57)" d="M936.3 667.6L823.1 780.7 512 469.6 200.9 780.7 87.7 667.6 512 243.3l424.3 424.3z"  /></svg>
    </vm-back-top> 


  </div>
</template>
<style>
.weui-panel {
    background-color: #fff;
     margin-top: 0; 
    position: relative;
    overflow: hidden;
}
.weui-media-box_appmsg .weui-media-box__thumb {
    width: 100%;
    height: 100%;
    vertical-align: top;
}

.weui-agree {
   padding: 0;
    float: right;
}

.vm-back-top{
      line-height: 0.8;
}
.vm-back-top-inner {
    background-color: rgba(0, 0, 0, 0);
}
.vm-back-top-inner:hover {
    background-color: rgba(255, 0, 0, 0.17);
}
.vm-back-top i {
    color: rgba(0, 8, 255, 0.57);
}
</style>
<script>

/**
 // 微信公众平台分享 (目前没有权限)
const wx = require('weixin-js-sdk')

import api from './api/index.js';


 api.getJsSDK(api,function(err,data){
    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: "wx702b93aef72f3549", // 必填，公众号的唯一标识
      timestamp: data.timestamp, // 必填，生成签名的时间戳
      nonceStr: data.nonceStr, // 必填，生成签名的随机串
      signature: data.signature, // 必填，签名，见附录1
      jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })

    
    wx.ready(function () {
        wx.checkJsApi({jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage']});
        wx.onMenuShareTimeline({
            title: '文博微讯',
            link: "http://wb.readfollow.com",
            imgUrl: 'http://wb.readfollow.com/file/images/wxsharelogo.jpg'
        });
        wx.onMenuShareAppMessage({
            title: '文博微讯',
            desc: '这里有您想了解的文博微信文章',
            link: "http://wb.readfollow.com",
            imgUrl: 'http://wb.readfollow.com/file/images/wxsharelogo.jpg'
        })
    })

  })
 */

// import BackTop from '@/components/BackTop'
import HeaderTab from '@/components/Header';
export default {
  name: 'app',
  components:{
    HeaderTab,
    // BackTop,
  }
}
</script>

