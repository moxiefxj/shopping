<template>
    <view>
        <image class="header"/>
        <view class="loginPane">
            <form class="form" @submit="formSubmit">
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
                    <image />
                </view>
                <!-- 登陆 -->
                <view class="formItem">
                    <button class="btn_login" type="primary" :disabled="!(pwdV&&emailV)" @click="login">登录</button>
                </view>
                <!-- 忘记密码/注册 -->
                <view class="formItem">
                    <text>忘记密码</text>
                    <text>注册</text>
                </view>
            </form>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            formData:{
                email:"",
                password:"",
                VarCode:'',
                code_key:''
            },
            emailV:false,
            pwdV:false
        }
    },
    beforeMount() {
        // this.getCodeKey()
    },
    methods:{
        input_email:function(){
            setTimeout(() => {
                // 判断email格式是否正确
                this.emailV = this.formData.email.length <= 20 && this.formData.email.length >5
            },300)
        },
        input_pwd:function(){
            setTimeout(() => {
                // 判断密码格式是否正确
                this.pwdV = this.formData.password.length <= 16 && this.formData.password.length >6
            },300)
        },
        login:function(){
            this.$uniRequest.post('/login',{
                ...formData
            }).then( res => {
                console.log(res)
            }).catch( res => {
                console.log(res)
            })
        },
        // getCodeKey:function(){
        //     this.$uniRequest.get("/getCodeKey").then(res => {
        //         this.setCaptch(res.data.code_key)
        //     }).catch(res => {
        //         console.log(res)
        //     })
        // },
        // setCaptch:function(code_key){
        //     console.log(code_key)
        //     this.$uniRequest.post("/setCaptcha",{
        //         code_key:code_key
        //     }).then(res => {
        //         console.log(res)
        //         let data = res.data 
        //     }).catch(res => {
        //         console.log(res)
        //     })
        // }
    }
}
</script>

<style>
    .header{
        background-color: darkgreen;
        width: 200rpx;
        height: 200rpx;
        border-radius: 100%;
        display: block;
        margin: 50rpx auto;
    }
    .loginPane{
        width: 600rpx;
        height: 600rpx;
        background-color: darkkhaki;
        margin: 0 auto;
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
</style>