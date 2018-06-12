import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container/Container'
import Page from '@/components/Page/Page'
import Demo20180609 from '@/demos/Demo20180609/Demo20180609'
import Demo20180610 from '@/demos/Demo20180610/Demo20180610'
import Demo20180612 from '@/demos/Demo20180612/Demo20180612'

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
      name: 'demo20180609',
      component: Demo20180609
    },
    {
      path: '/demo/20180610',
      name: 'demo20180610',
      component: Demo20180610
    },
    {
      path: '/demo/20180612',
      name: 'demo20180612',
      component: Demo20180612
    }
  ]
})

export default router
