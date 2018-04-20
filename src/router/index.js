import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/components/UserList'
import AddUser from '@/components/AddUser'
import UpdateUser from '@/components/UpdateUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/adduser',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/updateuser/:userId',
      name: 'UpdateUser',
      component: UpdateUser
    }
  ]
})
