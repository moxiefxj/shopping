import Vue from 'vue'
import App from './App'
import uniRequest from 'uni-request'
import store from './store'


uniRequest.defaults.baseURL = 'http://39.100.241.104:8010/api';

var userInfo = uni.getStorageSync('userInfo') || "";
if(userInfo.success){
  uniRequest.defaults.headers.common['Authorization'] = userInfo.token
}
// 令牌


uniRequest.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.$imageUrl = "http://39.100.241.104:8010/"

Vue.config.productionTip = false
Vue.prototype.$uniRequest = uniRequest
Vue.prototype.$store = store


App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
