// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue'
import Layout from './components/layout'
import router from './router/index'
import $ from 'jquery'
import './assets/bootstrap-3.3.7-dist/css/bootstrap.css'
import './assets/bootstrap-3.3.7-dist/js/bootstrap'

new Vue({
  el: "#app",
  router,
  components: {
    Layout
  },
  render:(h)=>h(Layout)
})
