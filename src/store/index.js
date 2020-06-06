import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state :{
        hasLogin: false,
        userInfo: {}
    },
    mutations: {
        login_s(state, provider) {
            state.hasLogin = true
            state.userInfo = provider 
        
            uni.setStorage({
                key: 'userInfo',
                data: provider
            })
        },
        logout(state) {
            state.hasLogin = false
            state.userInfo = {}
            uni.removeStorage({
                key: 'userInfo'
            });
        }
    }
})

export default store