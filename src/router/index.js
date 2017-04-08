import Vue from 'vue'
import Router from 'vue-router'

import apiPlugin from '../plugin/api'
import eventBusPlugin from '../plugin/bus'

import Home from '@/components/Home'
import ErrorPage from '@/components/ErrorPage'

Vue.use(Router)
Vue.use(apiPlugin)
Vue.use(eventBusPlugin)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: 'ErrorPage',
      component: ErrorPage
    }
  ]
})
