import Vue from 'vue/dist/vue'
import VRouter from 'vue-router'

import IndexPage from '../pages/index'
import ProductPage from '../pages/product'
import Forecast from '../pages/forecast'
import Analysis from '../pages/analysis'
import Advertise from '../pages/advertise'
import detailPage from '../pages/detail'
import orderList from '../pages/order_list'
import Boot from '../components/boot'
Vue.use(VRouter)

export default new VRouter({
  mode: 'history',
  routes: [
    {
      'path': '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: detailPage,
      children: [
        {
          path: 'product',
          component: ProductPage
        },
        {
          path: 'forecast',
          component: Forecast
        },
        {
          path: 'analysis',
          component: Analysis
        },
        {
          path: 'advertise',
          component: Advertise
        }
      ]
    },
    {
      path:'/orderList',
      component:orderList
    },
    {
      path:'/boot',
      component:Boot
    }
  ]
})
