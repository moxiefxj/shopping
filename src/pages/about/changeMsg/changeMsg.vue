<template>
    <view>
        <image class="header"/>
        <view class="registerPane">
            <form class="form">
                <!-- email -->
                <view class="formItem">
                    <input type="text" id="res_email" v-model="email" disabled="true"/>
                </view>
                <!-- name -->
                <view class="formItem">
                    <input type="text" v-model="formRegisterData.name" placeholder="新昵称" @input="input_name"/>
                    <icon :type="nameV ? 'success':'warn'"></icon>
                </view>
                <!-- tel -->
                <view class="formItem">
                    <input type="text" v-model="formRegisterData.tel" placeholder="新手机号" @input="input_tel"/>
                    <icon :type="telV ? 'success':'warn'"></icon>
                </view>
                <view class="formItem">
                    <input type="text" v-model="formRegisterData.VarCode" placeholder="请输入验证码" @input="input_tel"/>
                    <button type="primary" class="code" @click="getCode">获取验证码</button>
                </view>
                <!-- 确定 -->
                <view class="formItem">
                    <button class="btn_resjister" type="primary" :disabled="!(nameV&&telV)" @click="confirm">确定</button>
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
                id:"",
                name:"",
                tel:"",
                VarCode:''
            },
            email:"",
            nameV:false,
            telV:false,
        }
    },
    beforeMount(){
        let userInfo = this.$store.state.userInfo
        // 添加email
        this.email = userInfo.email
        this.formRegisterData.id = userInfo.id
    },
    methods:{
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
        confirm:function(){
            console.log(this.formRegisterData)
            this.$uniRequest.post('/Modify',{
                ...this.formRegisterData
            }).then( res => {
                if(res.data.success){
                    uni.showToast({
                        title: res.data.message,
                        icon:"success",
                        duration: 2000
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
            this.$uniRequest.post('/VarCodeSend',{
                email:this.email
            }).then( res => {
                console.log(res)
            }).catch( res => {
                console.log(res)
            })
        }
        
    },
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
    .registerPane{
        width: 600rpx;
        height: 700rpx;
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