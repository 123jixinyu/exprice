<template>
  <div id="detail">
    <div class="product-left">
      <div class="logo"><img :src="imgIcon"/></div>
      <div class="product-list">
        <ul>
          <router-link active-class="select-item" v-for="(item,index) in routes" :to="{path:item.path}" tag="li">
            {{item.name}}
          </router-link>
        </ul>
      </div>
    </div>
    <div class="product-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "product",
    data() {
      return {
        routes: [
          {
            name: '数据统计',
            path: 'product'
          },
          {
            name: '数据预测',
            path: 'forecast'
          },
          {
            name: '流量分析',
            path: 'analysis'
          },
          {
            name: '广告发布',
            path: 'advertise'
          }
        ],
        selectedRoute: 0,
        imgIcons: {
          '/detail/product': require('../assets/products/1.png'),
          '/detail/forecast': require('../assets/products/2.png'),
          '/detail/analysis': require('../assets/products/3.png'),
          '/detail/advertise': require('../assets/products/4.png'),
        }
      }
    },
    computed: {
      imgIcon: function () {
        return this.imgIcons[this.$route.path];
      }
    }
  }
</script>

<style scoped>
  ul {
    padding: 0;
    margin: 0 auto;
  }

  #detail {
    width: 1200px;
    margin: 20px auto;
  }

  #detail:after {
    clear: both;
    display: block;
    content: "";
    width: 0;
    height: 0;
    visibility: hidden;
  }

  .product-left {
    width: 200px;
    float: left;
    margin-right: 20px;
    background: white;
  }

  .product-left .logo {
    padding: 0 50px;
  }

  .product-left .logo img {
    width: 100%;
    height: 100%;
  }

  .product-left ul li {
    width: 150px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: 2px auto;
    cursor: pointer;
  }

  .product-left .selected {
    background: #64B587;
  }

  .product-left .product-list ul li:hover {
    background: #64B587;
  }

  .product-right {
    float: left;
    width: 880px;
  }

  .select-item {
    background: #64B587;
    color: white;
  }

</style>
