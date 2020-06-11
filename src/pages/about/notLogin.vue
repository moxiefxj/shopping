<template>
    <view>
        <view class="loginPane">
            <form class="form">
                <!-- email -->
                <view class="formItem">
                    <input type="text" v-model="formData.email" @input="input_email" placeholder="请输入email"/>
                    <icon :type="emailV ? 'success':'warn'"></icon>
                </view>
                <!-- password -->
                <view class="formItem">
                    <input type="password" v-model="formData.password" placeholder="请输入密码" @input="input_pwd"/>
                    <icon :type="pwdV ? 'success':'warn'"></icon>
                </view>
                <!-- 验证码 小程序不支持转化-->
                <view class="formItem">
                    <input type="text" v-model="formData.VarCode" placeholder="请输入验证码"/>
                    <image :src = "img" class="code_key" @click="getCodeKey"/>
                </view>
                <!-- 登陆 -->
                <view class="formItem">
                    <button class="btn_login" type="primary" :disabled="!(pwdV&&emailV)" @click="login">登录</button>
                </view>
                <!-- 忘记密码/注册 -->
                <view class="formItem" >
                    <text class="forgetPwd" @click="toModifyPwd">忘记密码</text>
                    <text class="register" @click="toRegister">注册</text>
                </view>
            </form>
        </view>
    </view>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data() {
        return {
            formData:{
                email:"",
                password:"",
                VarCode:'',
                code_key:'',
                captcha_url:""
            },
            emailV:false,
            pwdV:false,
            img:""
        }
    },
    beforeMount() {
        this.getCodeKey()
        
    },
    methods:{
        // 全局方法haslogin
        ...mapMutations(['login_s']),
        input_email:function(){
            setTimeout(() => {
                // 判断email格式是否正确
                this.emailV = this.formData.email.length <= 20 && this.formData.email.length >5
            },300)
        },
        input_pwd:function(){
            setTimeout(() => {
                // 判断密码格式是否正确
                this.pwdV = this.formData.password.length <= 16 && this.formData.password.length >=6
            },300)
        },
        login:function(){
            this.$uniRequest.post('/login',{
                ...this.formData
            }).then( res => {
                // 判断是否登陆成功
                console.log(res.data.success)
                if(res.data.success){
                    uni.showToast({
                        title: res.data.message,
                        icon:"success",
                        duration: 2000
                    });
                    // 跳转页面
                    this.toUser(res.data)
                }
                else{
                    console.log(res.data.message)
                    // 登录出错
                    uni.showToast({
                        title: res.data.message,
                        icon:"none",
                        duration: 2000
                    });
                }
                console.log(res)
            }).catch( res => {
                console.log(res)
            })
        },
        toUser(provide){
            console.log(this)
            provide.token = "Bearer "+provide.token
            this.$uniRequest.defaults.headers.common['Authorization'] = provide.token
            this.login_s(provide)
            console.log(this.$store.state.hasLogin)
            uni.reLaunch({
                 url: '/pages/tabBar/about/about'
            });
        },
        getCodeKey:function(){
            this.$uniRequest.get("/getCodeKey").then(res => {
                this.formData.code_key = res.data.code_key
                this.setCaptch(res.data.code_key)
            }).catch(res => {
                console.log(res)
            })
        },
        setCaptch:function(code_key){
            console.log(code_key)
            this.$uniRequest.post("/setCaptcha_weChat",{
                code_key:code_key
            }).then(res => {
                console.log(res)
                this.formData.captcha_url = res.data.captcha_url 
                this.img = this.$imageUrl + res.data.captcha_url 
            }).catch(res => {
                console.log(res)
            })
        },
        toRegister(){
            uni.navigateTo({
                url: '/pages/about/register'
            });
        },
        toModifyPwd(){
            uni.navigateTo({
                url: '/pages/about/changePwd/changePwd'
            });
        }
    },
    computed: {
        // 全局变量监控
        ...mapState(['hasLogin'])  
    },
}
</script>

<style>
    .loginPane{
        width: 600rpx;
        height: 600rpx;
        background-color: #4fc08d;
        margin: 260rpx auto;
        padding: 50rpx 0;
        border-radius: 20rpx;
    }
    .formItem{
        height: 100rpx;
        margin: 20rpx;
        display: flex;
    }
    input{
        width: 100%;
        height: 80rpx;
        border-radius: 20rpx;
        border:2rpx solid green;
        align-self: center;
        padding-left: 20rpx;
    }
    .btn_login{
        width: 100%;
    }
    .form{
        margin: 30rpx 0;
    }
    .code_key{
        width: 300rpx;
        height: 80rpx;
        align-self: center;
    }
    .forgetPwd{
        margin-right: 20rpx;
    }
</style>