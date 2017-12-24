<template>
  <div class="index_wrapper">
    <div class="index-left">
      <div class="nav">
        <div class="nav-title"><span>全部产品</span></div>
        <div class="nav-body" v-for="item in all_products">
          <div class="nav-sub-title"><span>{{item.title}}</span></div>
          <ul class="nav-list">
            <li v-for="data in item.items">
              <a href="#">{{data.name}}</a>
              <span v-if="data.hot" class="hot">Hot</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="nav">
        <div class="nav-title"><span>最新动态</span></div>
        <div class="nav-body" v-for="item in news">
          <div class="nav-sub-title"><span>{{item.title}}</span></div>
          <ul class="nav-list">
            <li v-for="data in item.items">
              <a href="#">{{data.name}}</a>
              <span v-if="data.hot" class="hot">Hot</span></li>
          </ul>
        </div>
      </div>
    </div>


    <div class="index-right">
      <div class="carousel">
        <slide :slides="slides"></slide>
      </div>
      <div class="product-list">
        <template v-for="(item,index) in products">
          <div class="product">
            <!--<div class="product-logo"><img src='../assets/1.png'/></div>-->
            <div class="product-logo"><img :src="item.imgSrc"/></div>
            <div class="product-desc">
              <h4>{{item.name}}</h4>
              <p>
                {{item.desc}}
              </p>
              <button>立即购买</button>
            </div>
          </div>
          <div v-if="!(index%2)" class="fence"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import slide from '../components/slide'
  export default {
    name: "index",
    components:{
      slide
    },
    data(){
      return{
        all_products:[
          {
            title:'PC产品',
            items:[
              {
                name:"数据统计",
                id:"1"
              },
              {
                name:"数据预测",
                id:"2"
              },
              {
                name:"流量分析",
                id:"3",
                hot:1
              },
              {
                name:"广告发布"
              }
            ]
          },
          {
            title:'手机应用类',
            items:[
              {
                name:"91助手",
                id:"1"
              },
              {
                name:"产品助手",
                id:"2"
              },
              {
                name:"智能地图",
                id:"3",
                hot:1
              },
              {
                name:"团队语音",
                id:"4",
                hot:1
              }
            ]
          }
        ],
        news:[
          {
            title:'最新消息',
            items:[
              {
                name:"新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1",
                id:"1"
              },
              {
                name:"新闻2新闻2新闻2新闻2新闻2新闻2新闻2新闻2",
                id:"2"
              },
              {
                name:"新闻3新闻3新闻3新闻3新闻3新闻3新闻3新闻3",
                id:"3"
              },
              {
                name:"新闻4新闻4新闻4新闻4新闻4新闻4新闻4新闻4"
              }
            ]
          },
        ],
        products:[
          {
            name:"开放产品",
            desc:"开发产品是指企业已经完成全部开发建设过程，并已验收合格，符合国家建设标准和设," +
            "计要求，可以按照合同规定的条件移交订购单位，或者作为对外销售、出租的产品。",
            imgSrc:require("../assets/products/1.png")
          },{
            name:"开放产品",
            desc:"开发产品是指企业已经完成全部开发建设过程，并已验收合格，符合国家建设标准和设," +
            "计要求，可以按照合同规定的条件移交订购单位，或者作为对外销售、出租的产品。",
            imgSrc:require("../assets/products/2.png")
          },
          {
            name:"开放产品",
            desc:"开发产品是指企业已经完成全部开发建设过程，并已验收合格，符合国家建设标准和设," +
            "计要求，可以按照合同规定的条件移交订购单位，或者作为对外销售、出租的产品。",
            imgSrc:require("../assets/products/3.png")
          },
          {
            name:"开放产品",
            desc:"开发产品是指企业已经完成全部开发建设过程，并已验收合格，符合国家建设标准和设," +
            "计要求，可以按照合同规定的条件移交订购单位，或者作为对外销售、出租的产品。",
            imgSrc:require("../assets/products/4.png")
          }

        ],
        slides:[
          {
            title:"这是第一张图",
            imgSrc:require('../assets/slides/pic1.jpg'),
          },
          {
            title:"这是第二张图",
            imgSrc:require('../assets/slides/pic2.jpg'),
          },
          {
            title:"这是第三张图",
            imgSrc:require('../assets/slides/pic3.jpg'),
          },
          {
            title:"这是第四张图",
            imgSrc:require('../assets/slides/pic4.jpg'),
          }
        ]
      }
    }
  }
</script>

<style type="text/css" scoped>
  /*  index容器样式*/
  .index_wrapper {
    width: 1200px;
    margin: 0 auto;
  }

  .index_wrapper:after {
    display: block;
    clear: both;
    content: '';
    width: 0;
    height: 0;
    visibility: hidden;
  }

  /*  index 左侧样式*/
  .index-left {
    float: left;
    width: 300px;
  }

  .index-left .nav{
    margin-bottom:20px;
    background: white;
  }
  .nav:nth-child(2){
    height:290px;
  }
  .index-left .nav .nav-title {
    background: #64B587;
    padding:5px 30px;
    color: white;
  }
  .index-left .nav .nav-sub-title{
    padding-left: 30px;
    font:1.1em arial;
  }
  .index-left .nav .nav-body{
    margin:10px 0;
    padding-bottom: 10px;
  }
  .index-left .nav ul {
    list-style: none;
    margin:0px;
  }
  .index-left .nav ul li{
    margin: 10px;
  }
  .index-left .nav ul li{
    white-space: nowrap;text-overflow: ellipsis;overflow:hidden;
  }

  .hot{
    color:red;
  }

  /*  index 右侧样式  */
  .index-right {
    float: left;
    width: 800px;
    margin-left: 30px;
  }
  .carousel{
    height:400px;
    background:grey;
  }
  .product{
    background:white;
    width:395px;
    height:140px;
    margin:10px 0;
    float:left;
  }
  .product .product-logo{
    float:left;
    height:100px;
    padding:20px;
    margin-left:10px;
  }
  .product-logo img{
    display: block;
  }
  .product .product-desc{
    padding: 10px 0px;
  }
  .product h4{
    display: inline-block;
    margin:0;
  }
  .product p{
    margin:10px;white-space:nowrap;text-overflow: ellipsis;overflow: hidden;color:#444444;
  }
  .product-desc button{
    display: block;
    padding:10px;
    width:120px;
    color:white;
    font:1em arial;
    background:#6FBD91;
    border-radius:5px;
  }
  .fence{
    width:10px;
    float:left;
    height:140px;
  }
</style>
