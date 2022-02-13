import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Users from '@/components/menus/MyUsers.vue'
import Rights from '@/components/menus/MyRights.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Setting from '@/components/menus/MySettings.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
    { path: '/', redirect: Login },
    { path: '/login', component: Login },
    { path: '/home', component: Home, children: [
      { path: '', redirect: Users },
      { path: 'users', component: Users },
      { path: 'rights', component: Rights },
      { path: 'goods', component: Goods },
      { path: 'orders', component: Orders },
      { path: 'setting', component: Setting }
    ]}
  ]
})

router.beforeEach(function (to, from, next) {
  if(to.path === '/home'){
    const token = localStorage.getItem('token')
    if(token){
      next()
    }else{
      alert('你必须先登录！')
      next('/login')
    }
  }else{
    next()
  }
})

export default router