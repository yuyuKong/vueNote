import Vue from 'vue'

import Router from 'vue-router'
import Mint from '@/components/Mint'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mint',
      component: Mint
    }
  ]
})
