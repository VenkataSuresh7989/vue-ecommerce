import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

let baseIP = "192.168.0.106";
axios.defaults.baseURL = 'http://' + baseIP + ':8080';
axios.defaults.serviceURL = 'http://localhost:3000';

export default new Vuex.Store({
  state: {
    
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
