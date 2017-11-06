<template>

<div> <!--
     <div class="weui-navbar">
          <router-link class="weui-navbar__item"  to="/">文博</router-link>
          <router-link class="weui-navbar__item"  to="/new">最新</router-link> 
          <router-link class="weui-navbar__item" to="/post">分享</router-link>

    </div> -->
</div>
</template>
<style>
.weui-navbar__item.weui-bar__item_on{
  background-color:white;
  color: red;
}


.weui-media-box_appmsg .weui-media-box__hd{
      width: 80px;
}
.weui-navbar__item {
    position: relative;
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding: 13px 0;
    text-align: center;
    font-size: 15px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
</style>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      backTo: {
        type: String,
        default: '/'
      }
    },
    methods: {
      back () {
        this.$router.push(this.backTo)
      }
    }
  }
</script>