<template>
    <view>
        <view class="registerPane">
            <form class="form">
                <!-- email -->
                <view class="formItem">
                    <input type="text" id="res_email" v-model="formRegisterData.email" @input="input_email" placeholder="请输入email"/>
                    <icon :type="emailV ? 'success':'warn'"></icon>
                </view>
                <!-- password -->
                <view class="formItem">
                    <input type="password" id="res_pwd" v-model="formRegisterData.password" placeholder="请输入密码" @input="input_pwd"/>
                    <icon :type="pwdV ? 'success':'warn'"></icon>
                </view>
                <!-- name -->
                <view class="formItem">
                    <input type="text" v-model="formRegisterData.name" placeholder="请输入昵称" @input="input_name"/>
                    <icon :type="nameV ? 'success':'warn'"></icon>
                </view>
                <!-- tel -->
                <view class="formItem">
                    <input type="text" v-model="formRegisterData.tel" placeholder="请输入手机号" @input="input_tel"/>
                    <icon :type="telV ? 'success':'warn'"></icon>
                </view>
                <view class="formItem">
                    <input type="text" v-model="formRegisterData.VarCode" placeholder="请输入验证码" @input="input_tel"/>
                    <button type="primary" class="code" @click="getCode">获取验证码</button>
                </view>
                <!-- 注册 -->
                <view class="formItem">
                    <button class="btn_resjister" type="primary" :disabled="!(pwdV&&emailV&&nameV&&telV)" @click="register">注册</button>
                </view>
            </form>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            formRegisterData:{
                email:"",
                password:"",
                name:"",
                tel:"",
                VarCode:''
            },
            emailV:false,
            pwdV:false,
            nameV:false,
            telV:false,
        }
    },
    methods:{
        input_email:function(){
            setTimeout(() => {
                // 判断email
                this.emailV = this.formRegisterData.email.length <= 20 && this.formRegisterData.email.length >5
            },300)
        },
        input_pwd:function(){
            setTimeout(() => {
                // 判断密码
                this.pwdV = this.formRegisterData.password.length <= 16 && this.formRegisterData.password.length >=6
            },300)
        },
        input_name:function(){
            setTimeout(() => {
                // 判断name
                this.nameV = this.formRegisterData.name.length <= 10 && this.formRegisterData.name.length > 0
            },300)
        },
        input_tel:function(){
            setTimeout(() => {
                // 判断email格式是否正确
                this.telV = this.formRegisterData.tel.length == 11 
            },300)
        },
        register:function(){
            console.log(this.formRegisterData)
            this.$uniRequest.post('/register',{
                ...this.formRegisterData
            }).then( res => {
                if(res.data.success){
                    uni.showToast({
                        title: res.data.message,
                        icon:"success",
                        duration: 2000
                    });
                    // 跳转登录界面
                    uni.reLaunch({
                         url: '/pages/tabBar/about/about'
                    });
                }else{
                    uni.showToast({
                        title: res.data.message,
                        icon:"none",
                        duration: 2000
                    });
                }
            })
                    
        },
        getCode:function(){
            if(this.emailV){
                this.$uniRequest.post('/VarCodeSend',{
                    email:this.formRegisterData.email
                }).then( res => {
                    console.log(res)
                }).catch( res => {
                    console.log(res)
                })
            }else{
                uni.showToast({
                    title: 'email输入有误',
                    duration: 2000,
                    icon:'none'
                });
            }
        }
    },
}
</script>

<style>
    .registerPane{
        width: 600rpx;
        height: 700rpx;
        background-color: #4fc08d;
        margin: 160rpx auto;
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
    .btn_resjister{
        width: 100%;
    }
    .form{
        margin: 30rpx 0;
    }
    .code{
        width: 400rpx;
        height: 80rpx;
        align-self: center;
        margin-left: 20rpx;
        font-size: 30rpx;
    }

</style>