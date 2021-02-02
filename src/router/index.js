import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/views.home.vue'

Vue.use( VueRouter );

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: function() {
      return import( '../views/views.about.vue' )
    }
  },
  {
    path: '/product',
    name: 'Product',
    component: function() {
      return import( '../views/views.product.vue' )
    }
  },
  {
    path: '/skill',
    name: 'Skill',
    component: function() {
      return import( '../views/views.skill.vue' )
    }
  },
  {
    path: '*',
    component: Home
  }
];

const router = new VueRouter( {
  mode: 'history',
  base: process.env.BASE_URL,
  routes
} );

export default router;
