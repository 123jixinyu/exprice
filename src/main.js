// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VRouter from 'vue-router'

import IndexPage from './pages/index'
import ProductPage from './pages/product'

Vue.use(VRouter)

let router=new VRouter({
  mode:'history',
  routes:[
    {
      'path':'/',
      component:IndexPage
    },
    {
      path:'/product',
      component:ProductPage
    }
  ]
})

new Vue({
  el: "#app",
  router,
  template:'<Layout/>',
  components:{Layout}
});
