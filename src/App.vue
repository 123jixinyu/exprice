<template>
  <div id="app2">
    <img src="./assets/logo.png">
    <componentA v-on:event="listenA"></componentA>
    <ul>
      <li :class="classA" v-for="(item ,index) in list">{{item.name}}</li>
    </ul>
    <div v-if="dicision">
      <p>xxxxxxxxxx</p>
    </div>
    <div v-else>
      <p>11111111</p>
    </div>
    <button v-on:click="add">按钮</button>
  </div>
</template>


<script>
  import componentA from './components/HelloWorld.vue'
  import Vue from 'vue'
  export default {
    components: {
      componentA
    },
    name: 'app2',
    data() {
      return {
        hello: 'world',
        list: [
          {
            name: '111',
            sex: '男'

          }
        ],
        classA:[
          'red',
          {
            black:false
          }
        ],
        dicision:true
      }
    },
    methods: {
      add() {
        Vue.set(this.list,0,{
          name: '222',
          sex: '男'
        });
      },
      listenA(params){
        console.log(params);
      }
    }

  }
</script>

<style>
  #app2 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .red{
    color:red;
  }
  .black{
    width:100px;
    background: black;
  }
</style>
