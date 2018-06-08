import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container/Container'
import Page from '@/components/Page/Page'
import Demo20180609 from '@/demos/Demo20180609/Demo20180609'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Container
    },
    {
      path: '/page/:id',
      name: 'list',
      component: Page
    },
    {
      path: '/demo/20180609',
      name: 'demo',
      component: Demo20180609
    }
  ]
})

export default router
