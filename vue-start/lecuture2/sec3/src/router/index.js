import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// 各ルートはオブジェクト形式で設定する
const routes = [
  {
    path: '/',
    name: 'Home',
    // 事前にimportしたコンポーネントを読み込む
    // 初回の描画時に読み込みが行われる
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 関数の返り値で設定すると読み込み時に呼び出しする
    // webpackChunkNameを追加した場合は、分割されて呼び出される
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
