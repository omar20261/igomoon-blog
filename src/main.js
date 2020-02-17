import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import {store} from './config/store'

Vue.use(VueResource);
Vue.use(require('vue-moment'));

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
