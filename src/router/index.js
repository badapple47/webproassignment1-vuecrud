/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/components/UserList'
import UserList2 from '@/components/UserList2'
import AddUser from '@/components/AddUser'
import UpdateUser from '@/components/UpdateUser'
import UpdateUser2 from '@/components/UpdateUser2'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'UserList2',
      component: UserList2
    },
    {
      path: '/adduser',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/updateuser/:userId',
      name: 'UpdateUser2',
      component: UpdateUser2
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },

  ]

})
