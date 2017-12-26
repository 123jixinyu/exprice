<template>
<div id="product">
  <div class="product-left">
    <div class="logo"><img src="../assets/products/1.png"/></div>
    <div class="product-list">
      <ul>
        <li class="selected"><a href="#">数据统计</a></li>
        <li><a href="#">数据预测</a></li>
        <li><a href="#">流量分析</a></li>
        <li><a href="#">广告发布</a></li>
      </ul>
    </div>
  </div>
  <div class="product-right">

    <div class="product-desc">
      <h3>数据统计</h3>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      <div class="select">
       <div class="item">
          <span>购买数量</span>
          <div class="option">
            <span class="action">-</span>
            <input type="text" value="1"/>
            <span class="action">+</span>
          </div>
       </div>

        <div class="item">
          <span>产品类型</span>
          <div class="option">
            <select>
              <option>入门版</option>
              <option>中级版</option>
              <option>高级版</option>
            </select>
          </div>
        </div>

        <div class="item">
          <span>有效时间</span>
          <div class="option">
            <ul>
              <li class="select-item">半年</li>
              <li>一年</li>
              <li>三年</li>
            </ul>
          </div>
        </div>

        <div class="item">
          <span>产品版本</span>
          <div class="option">
            <ul>
              <li class="select-item">客户版</li>
              <li>代理商版</li>
              <li>专家版</li>
            </ul>
          </div>
        </div>
        <div class="item">
          <span>总价</span>
          <div class="option">
            <span>
              678 元
            </span>
          </div>
        </div>
        <div class="item">
          <span></span>
          <button>立即购买</button>
        </div>
      </div>
    </div>

    <div class="product-detail">
      <h2>产品说明</h2>
      <pre>
网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。
      </pre>
      <strong><h3>用户行为指标</h3></strong>
      <pre>
用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：
用户在网站的停留时间；
用户来源网站（也叫“引导网站”）；
用户所使用的搜索引擎及其关键词；
在不同时段的用户访问量情况等。
      </pre>

      <strong><h3>浏览网站方式</h3></strong>
      <pre>
用户上网设备类型
用户浏览器的名称和版本
访问者电脑分辨率显示模式
用户所使用的操作系统名称和版本
用户所在地理区域分布状况等
      </pre>

    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "product"
  }
</script>

<style scoped>
  ul{
    padding:0;
    margin: 0 auto;
  }
  #product{
    width:1200px;
    margin:30px auto;
  }
  .product-left{
    width:200px;
    float:left;
    margin-right:20px;
    background: white;
  }

  .product-left .logo{
    padding:20px 50px;
  }
  .product-left .logo img{
    width:100%;
    height:100%;
  }
  .product-left ul li{
    width:150px;
    height:30px;
    line-height: 30px;
    text-align: center;
    margin:0 auto;
  }

  .product-left .selected{
    background: #64B587;
  }

  .product-left .product-list ul li:hover{
    background:#64B587;
  }

  .product-right{
    float:left;
    width:880px;
  }

  .product-desc,.product-detail{
    background: white;
    padding:20px 20px;
    color:#444444;
  }
  .product-right h3{
    display: inline-block;
  }

  .product-desc p{
    background: #F8FCFF;
    font:0.9em arial;
  }

  .product-right .select{
    font:0.9em arial;
    color:#444444;
  }
  .product-desc .item{
    margin:20px 0;
  }
  .product-desc .item .option{
    display: inline-block;
    margin-left:20px;
  }
  .option .action{
    display: inline-block;
    background: #64B587;
    width:20px;
    padding:2px;
    text-align: center;
    cursor: pointer;
  }

  pre{white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;}

  .select .item >span{
    display: inline-block;
    width:58px;
  }
  .option input{
    display: inline-block;
    width:30px;
    text-align: center;
    margin:0 -4px;
    border:1px solid #EEEEEE;
  }
  .option ul{
    display:inline-block;
    height:16px;
  }
  .option ul li{
    float:left;
    width:50px;
    padding: 3px 3px;
    margin-right:10px;
    text-align: center;
    cursor: pointer;
    border-radius: 1px;
  }

  .select-item{
    background: #64B587;
    color:white;
  }

  .item button{
    display: inline-block;
    padding: 10px 30px;
    margin-left:14px;
    background:#64B587;
    border-radius: 5px;
    color:white;
    font-size: 1.1em;
  }
</style>
