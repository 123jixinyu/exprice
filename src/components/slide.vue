<template>
  <div>
    <div class="slide">
      <div class="slide-img">
        <img :src="slides[slideIndex].imgSrc"/>
      </div>
      <div class="slide-bottom">
        <p class="slide-desc">{{slides[slideIndex].title}}</p>
        <div class="slide-page-list">
          <span @click="left" class="left">﹤</span>
          <span @click="change(index)"  v-for="(item,index) in slides" :class="index==slideIndex?'selected':''">{{index+1}}</span>
          <span @click="right" class="right">﹥</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "slide",
    props: {
      slides:''
    },
    data() {
      return {
        slideIndex:0,
        is_selected:''
      }
    },
    created:function(){
      var _this=this;
      this.slideInterval=setInterval(function(){
        _this.slideIndex+=1;
        if(_this.slideIndex>_this.slides.length-1){
          _this.slideIndex=0;
        }
      },2000);
    },
    methods:{
      change:function(index){
        this.slideIndex=index;
      },
      left:function(){
        if(this.slideIndex>0){
          this.slideIndex-=1;
        }
      },
      right:function(){
        if(this.slideIndex<this.slides.length-1){
          this.slideIndex+=1;
        }
      }
    }
  }
</script>

<style scoped>
  .slide {
    height: 400px;
    display: block;
  }

  .slide .slide-img {
    height: 400px;
  }

  .slide .slide-img img {
    width: 100%;
    height: 100%;
  }
  /*  slide bottom css  */
  .slide-bottom {
    position: absolute;
    width: 800px;
    background: darkslategrey;
    opacity: 0.5;
    height:30px;
    line-height: 30px;
    margin-top: -30px;
  }
  .slide-bottom:after{
    clear:both;display: block;content:'';width:0;height:0;visibility: hidden;
  }

  .slide-bottom p {
    float:left;
    margin:0 10px;
    color:white;
  }
  .slide-bottom .slide-page-list{
    float:right;
    color:gray;
  }
  .slide-bottom .slide-page-list span{
    display: inline-block;
    margin-left:10px;
  }

  .slide-bottom .slide-page-list span{
    padding: 0 5px;
    cursor: pointer;
  }
  .selected{
    color:white;
  }
</style>
