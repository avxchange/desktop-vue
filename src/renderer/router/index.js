import Vue from 'vue'
import Router from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faCodeBranch, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCog, faCodeBranch, faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login-signup',
      component: require('@/components/LoginSignup').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
