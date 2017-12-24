<template>
    <div>
      <div class="dialog" v-if="show">
        <div class="action"><span @click="close">☓</span></div>
        <form>
          <div class="form-group">
            <span>用户名:</span>
            <input/>
          </div>
          <div class="form-group">
            <span>密&nbsp;&nbsp;&nbsp;码:</span>
            <input type="password"/>
          </div>
          <input class="btn" type="submit" value="登录"/>
        </form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "app_dialog",
        props:{
          show:true
        },
        data(){
          return{
          }
        },
        methods:{
          close:function(){
            this.$emit('onCloseDialog')
          }
        }
    }
</script>

<style scoped>

  .hidden{
    display: none;
  }
  .dialog{
    position:fixed;
    display: block;
    left:40%;
    top:20%;
    width:500px;
    background:white;
    z-index: 1000;
    color:black;
    overflow:hidden;
    border:2px solid #81BA94;
  }
  form{
    margin-top:30px;
  }
  .action span{
    display: inline-block;
    float:right;
    padding:3px 10px;
    cursor:pointer;
  }
  .action:after{
    clear:both;display: block;
    content:'';width:0;height:0;visibility: hidden;overflow: hidden;
  }
  form .form-group{
    margin:10px 0;
  }
  .form-group span{
    display: block;
    margin-left:20px;
    height:35px;
    line-height: 35px;
    float:left;
  }
  .form-group input{
    margin-left:20px;
    width:300px;
    height:30px;
    flaot:left;
  }
  .btn{
    display: inline-block;
    width:100px;
    height:40px;
    background:#81BA94;
    color:white;
  }
  form .btn{
    margin: 10px 100px;
  }
</style>
