import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Full from '../components/Full.vue';
import Message from '../components/Message/Message.vue';
import Friend from '../components/Friend/Friend.vue';
import Personal from '../components/Personal/Personal.vue';
import Chat from '../components/Message/Chat.vue';

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
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/full',
      name: 'Full',
      component: Full,
      redirect : '/message',
      children : [
        {
          path: '/message',
          name: '消息',
          component: Message,
        },
        {
          path: '/friend',
          name: '联系人',
          component: Friend,
        },
        {
          path: '/personal',
          name: '个人信息',
          component: Personal,
        }
      ]
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
    },
  ]
})
