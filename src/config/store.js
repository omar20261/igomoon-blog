import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    API_ENDPOINT: 'https://factory.igomoon.com',
    G_loading:true,
  }
})
