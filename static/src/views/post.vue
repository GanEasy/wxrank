<template>

    <div class="container">

     
	<div class="row justify-content-center">



<div class=" mx-auto col-md-3 order-md-2">
  <br>
    <h3>通过微信号分享</h3>
  <p></p>
  <br>
<div class="card" >
  <div class="card-body">
    <h4 class="card-title">小灰灰(机器人)</h4>
    <img src="../assets/xiaohuihuiwx.jpg" alt="小灰灰微信" class="card-img">
    <p class="card-text">如果您有更多的文章要分享，可以添加我们的微信，把要分享文章发送给我们！</p>
  </div>
</div>
</div>


<div class="col-md-9 order-md-1  text-md-left pr-md-5">  <br>

<form @submit.prevent="submit">
  <h3>手动提交</h3><br>
  <div class="form-group">
    <label for="exampleInputEmail1">微信文章地址</label>
    <input  v-model="url" type="url" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="请粘贴微信文章链接地址">
    <small id="emailHelp" class="form-text text-muted">请粘贴微信文章地址，我们系统将会进行验证和收录.</small>
  </div>
  <button type="submit" class="btn btn-primary">提交</button>
   <br> <br>
</form>

</div>


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
