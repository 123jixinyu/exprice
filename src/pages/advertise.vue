<template>
  <div id="product">
    <div class="product-right">
      <div class="product-desc">
        <h3>广告投放</h3>
        <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
        <div class="select">
          <div class="item">
            <span>购买数量</span>
            <div class="option">
              <span class="action" @click="reduce">-</span>
              <input type="text" v-model="number"/>
              <span class="action" @click="increase">+</span>
            </div>
          </div>

          <div class="item">
            <span>产品类型</span>
            <div class="option">
              <select v-model="selectedType">
                <option v-for="(item,index) in types" v-bind:value="index">{{item}}</option>
              </select>
            </div>
          </div>

          <div class="item">
            <span>有效时间</span>
            <div class="option">
              <ul>
                <li @click="clickTime(index)" v-for="(time,index) in validTimes"
                    :class="index==selectedTime? 'select-item':''">{{time}}
                </li>
              </ul>
            </div>
          </div>

          <div class="item">
            <span>产品版本</span>
            <div class="option">
              <ul>
                <li @click="selectVersion(index)" v-for="(item,index) in versions"
                    :class="check(index)?'select-item':''">{{item}}
                </li>
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
    name: "product",
    data() {
      return {
        types: [
          "入门版",
          "中级版",
          "高级版"
        ],
        validTimes: [
          "半年",
          "一年",
          "三年"
        ],
        versions: [
          "客户版",
          "代理商版",
          "专家版"
        ],
        number: 1,
        selectedTime: 2,
        selectedType: 0,
        selectedVersions: [0]
      }
    },
    methods: {
      reduce: function () {
        if (this.number >= 1) {
          this.number -= 1;
        }
      },
      increase: function () {
        this.number += 1;
      },
      clickTime: function (index) {
        this.selectedTime = index;
      },
      selectVersion: function (index) {
        for(var i=0;i<this.selectedVersions.length;i++){
          if(index==this.selectedVersions[i]){
            this.selectedVersions.splice(i, 1);
            return;
          }
        }
        this.selectedVersions.push(index);
      },
      check: function (index) {
        for (var i = 0; i < this.selectedVersions.length; i++) {
          if (index == this.selectedVersions[i]) {
            return true;
          }
        }
        return false;
      }
    }
  }
</script>

<style scoped>
  ul {
    padding: 0;
    margin: 0 auto;
  }

  .product-right {
    float: left;
    width: 880px;
  }

  .product-desc, .product-detail {
    background: white;
    padding: 20px 20px;
    color: #444444;
  }

  .product-right h3 {
    display: inline-block;
  }

  .product-desc p {
    background: #F8FCFF;
    font: 0.9em arial;
  }

  .product-right .select {
    font: 0.9em arial;
    color: #444444;
  }

  .product-desc .item {
    margin: 20px 0;
  }

  .product-desc .item .option {
    display: inline-block;
    margin-left: 20px;
  }

  .option .action {
    display: inline-block;
    background: #64B587;
    width: 20px;
    padding: 2px;
    text-align: center;
    cursor: pointer;
  }

  pre {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }

  .select .item > span {
    display: inline-block;
    width: 58px;
  }

  .option input {
    display: inline-block;
    width: 30px;
    text-align: center;
    margin: 0 -4px;
    border: 1px solid #EEEEEE;
  }

  .option ul {
    display: inline-block;
    height: 16px;
  }

  .option ul li {
    float: left;
    width: 70px;
    padding: 3px 3px;
    margin-right: 10px;
    text-align: center;
    cursor: pointer;
    border-radius: 1px;
  }

  .select-item {
    background: #64B587;
    color: white;
  }

  .item button {
    display: inline-block;
    padding: 10px 30px;
    margin-left: 14px;
    background: #64B587;
    border-radius: 5px;
    color: white;
    font-size: 1.1em;
  }
</style>
