<template>
    <view>
        <view class="changePwdPane">
            <form class="form">
                <!-- email -->
                <view class="formItem">
                    <input type="text" id="res_email" v-model="email" disabled @input="input_email" placeholder="请输入email"/>
                </view>
                <!-- password -->
                <view class="formItem">
                    <input type="password" id="res_pwd" v-model="formChangeData.password" placeholder="请输入密码" @input="input_pwd"/>
                    <icon :type="pwdV ? 'success':'warn'"></icon>
                </view>
                <!-- 确定 -->
                <view class="formItem">
                    <button class="btn_resjister" type="primary" :disabled="!(pwdV&&emailV)" @click="comfirm">确定</button>
                </view>
            </form>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            formChangeData:{
                id:"",
                password:""
            },
            pwdV:false,
            email:""
        }
    },
    beforeMount() {
        let userInfo = this.$store.state.userInfo
        this.formChangeData.id = userInfo.id
        this.email = userInfo.email
    },
    methods:{
        input_pwd:function(){
            setTimeout(() => {
                // 判断密码
                this.pwdV = this.formChangeData.password.length <= 16 && this.formChangeData.password.length >=6
            },300)
        },
        comfirm:function(){
            console.log(this.formChangeData)
            this.$uniRequest.post('/UpdatePassword',{
                ...this.formChangeData
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
    },
}
</script>

<style>
    .changePwdPane{
        width: 600rpx;
        height: 700rpx;
        background-color: #4fc08d;
        margin: 200rpx auto;
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