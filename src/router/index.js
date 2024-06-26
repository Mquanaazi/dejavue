import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import CardView from '../components/CardComp.vue'
import FriendsView from '../views/FriendsView.vue'
import CarsView from '../views/CarsView.vue'
import ConsolesView from '../views/ConsolesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: 'c',
  //   name: 'Card',
  //   component: CardView
  // },
  {
    path: '/friends',
    name: 'friends',
    component: FriendsView
  },
  {
    path: '/cars',
    name: 'cars',
    component: CarsView
  },
  {
    path: '/Consoles',
    name: 'consles',
    component: ConsolesView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
