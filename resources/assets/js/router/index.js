import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          redirect : '/login',
      },
      {
          path: '/login',
          name: 'Login',
          component: () => System.import('../components/Login'),
      },
      {
          path: '/full',
          name: 'Full',
          component: () => System.import('../components/Full'),
          redirect : '/message',
          children : [
              {
                  path: '/message',
                  name: '消息',
                  component: () => System.import('../components/Message'),
              },
              {
                  path: '/friend',
                  name: '联系人',
                  component: () => System.import('../components/Friend'),
              },
              {
                  path: '/personal',
                  name: '个人信息',
                  component: () => System.import('../components/Personal'),
              }
          ]
      },
      {
          path: '/chat',
          name: 'chat',
          component: () => System.import('../components/Chat'),
      },
  ]
})
