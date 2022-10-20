import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import { getAuth } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/SignIn',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/SignUp',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta:{
        authRequired: true
      }
    }
  ]
})
router.beforeEach((to, from, next)=>{
    if(to.meta.authRequired){
      if(getAuth().currentUser){
        next();
      }else{
        alert("sign in first")
        router.push({
         name: "sign-in"
        })
      }
    }else{
      next();
    }
})
export default router
