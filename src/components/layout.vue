<template>
  <div>
    <div class="app-header">
      <div class="logo">
        <img src="../assets/logo.png"/>
      </div>
      <div class="nav">
        <ul>
          <li><a href="#" @click="loginClick">登录</a></li>
          <li><a href="#">|</a></li>
          <li><a href="#">注册</a></li>
          <li><a href="#">|</a></li>
          <li><a href="#">关于</a></li>
        </ul>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <p>本项目源码受 MIT开源协议保护，文档受 CC BY 3.0 开源协议保护。</p>
    </div>
    <app-dialog :show="showDialog" @onCloseDialog="onCloseDialog"></app-dialog>
  </div>
</template>


<script>
  import appDialog from './app_dialog'
  export default {
    name:'layout',
    data(){
      return {
        showDialog:false
      }
    },
    components:{
      appDialog
    },
    methods:{
      loginClick:function(){
        this.showDialog=true;
      },
      onCloseDialog:function(){
        this.showDialog=false;
      }
    }
  }
</script>

<style type="text/css">
  body{
    margin:0px;
    text-decoration: none;
    background: #EEEEEE;
  }
  a{
    text-decoration: none;
    color:black;
  }
  ul{
    list-style: none;
  }
  select {
    padding: 3px 5px;
    background: white;
    /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
    border: solid 1px #000;

    /*很关键：将默认的select选择框样式清除*/
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;

    /*在选择框的最右侧中间显示小箭头图片*/
    background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;


    /*为下拉小箭头留出一点位置，避免被文字覆盖*/
    padding-right: 14px;
  }


  /*清除ie的默认选择框样式清除，隐藏下拉箭头*/
  select::-ms-expand { display: none; }

  select {
    border: 0;
    outline: 1px solid rgb(204,204,204);
  }
  /*  header css  */
  .app-header{
    height:80px;
    background:#2A2830;
  }
  .app-header:after{
    clear:both;display: block;content:'';width:0;height:0;visibility:hidden;
  }
  /*  header logo css */
  .app-header .logo{
    display: block;
    height:60px;
    width:60px;
    padding:10px;
    float:left;
    margin-left:150px;
  }
  .app-header .logo img{
    width:100%;
    height:100%;
  }
  /*  header nav css  */
  .app-header .nav{
    height:40px;
    padding: 20px;
    float:right;
  }
  .app-header .nav:after{
    display: block;content: "";clear:both;width:0;height:0;visibility: hidden;
  }
  .app-header .nav ul{
    margin:0px;
    height:40px;
    list-style-type: none;
    line-height: 10px;

  }
  .app-header .nav ul:after{
    display: block;content: "";clear:both;width:0;height:0;visibility: hidden;
  }
  .app-header .nav ul li{
    float:left;
    display: inline-block;
    margin-left: 10px;
    padding: 15px;
  }
  .app-header .nav ul li:hover{
    background: darkgrey;
  }
  .app-header .nav ul li a{
    color:grey
  }
  .nav ul li a:visited{
    display: block;
    width:100%;
    height:100%;
  }

  .app-content:after{
    display: block;clear: both; content:'';width:0;height:0;visibility:hidden;
  }
  .app-content{
    margin-top:10px;
  }

  /*  footer css  */
  .app-footer{
    height: 100px;
    width:100%;
    background: darkgrey;
    margin-top:100px;
  }
  .app-footer p{
    line-height: 100px;
    text-align: center;
  }

</style>
