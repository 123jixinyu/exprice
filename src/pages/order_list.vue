<template>
  <div id="order-list">
    <h3>您的产品</h3>
    <div class="select">
      <span>选择产品:</span>
      <select>
        <option>数据预测</option>
      </select>
      <span>开始日期:</span>
      <vue-datetime-picker class="vue-picker4" name="picker4"
                           :model.sync="begin"
                           type="time"
                           language="zh-CN"
                           time-format="LT">
      </vue-datetime-picker>

      <span>结束日期:</span>
      <vue-datetime-picker class="vue-picker4" name="picker4"
                           :model.sync="end"
                           type="time"
                           language="zh-CN"
                           time-format="LT">
      </vue-datetime-picker>

      <span>关键词:</span>
      <input type="text"/>
    </div>

    <div class="table-wrap">
      <table>
        <tr>
          <th>订单号</th>
          <th>购买产品</th>
          <th>版本类型</th>
          <th>有效时间</th>
          <th>购买日期</th>
          <th>数量</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
        </tr>
        <tr>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
        </tr>
        <tr>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
        </tr>
        <tr>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
        </tr>
        <tr>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
        </tr>
        <tr>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
          <td>11111</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

  import VueDatetimePicker from 'vue-datetime-picker'

  export default {
    name: "order_list",
    data() {
      return {
        begin: '2020-10-10',
        end: '2020-10-10',
      }
    },
    components:{
      VueDatetimePicker
    }
  }
</script>

<style scoped>
  #order-list {
    width: 1000px;
    margin: 0 auto;
  }

  #order-list .select span {
    color: #444444;
    margin-right: 20px;
    font-size: 13px;
  }

  #order-list span, input {
    display: inline-block;
    height: 25px;
  }

  #order-list select {
    height: 30px;
    width: 80px;
    padding-left: 15px;
  }

  .select select, input {
    margin-right: 10px;
  }

  #order-list table {
    border-collapse: collapse;
  }

  #order-list table tr:nth-child(1) {
    background: #6EBD91;
    color: white;
  }

  .table-wrap {
    margin: 30px 0;
  }

  table th {
    font-size: 14px;
    padding: 5px;
  }

  table {
    border-right: 1px solid lightgrey;
  }

  table td {
    padding: 10px 50px;
    border-left: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
  }


</style>
