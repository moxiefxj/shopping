import Vue from 'vue'
import App from './App'
import uniRequest from 'uni-request'

Vue.config.productionTip = false
uniRequest.defaults.baseURL = 'http://39.100.241.104:8010/api';

Vue.prototype.$uniRequest = uniRequest;


App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
