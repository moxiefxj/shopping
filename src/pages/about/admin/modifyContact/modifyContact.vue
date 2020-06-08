<template>
    <view>
        <view class="changeContactPane">
            <form class="form">
                <!-- email -->
                <view class="formItem">
                    <input type="text" v-model="formChangeData.Email1" placeholder="请输入email"/>
                    <icon :type="emailV ? 'success':'warn'"></icon>
                </view>
                <!-- tel -->
                <view class="formItem">
                    <input type="tel" v-model="formChangeData.SalesTel" placeholder="新手机号"/>
                    <icon :type="telV ? 'success':'warn'"></icon>
                </view>
                <!-- 地址 -->
                <view class="formItem">
                    <input type="text" v-model="formChangeData.Address"  placeholder="请输入地址"/>
                    <icon :type="addressV ? 'success':'warn'"></icon>
                </view>
                <!-- 确定 -->
                <view class="formItem">
                    <button class="btn_resjister" type="primary" :disabled="!(telV&&emailV&&addressV)" @click="comfirm">确定</button>
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
                Email1:"",
                SalesTel:"",
                Address:'',
                u_id:''
            },
            emailV:false,
            telV:false,
            addressV:false
        }
    },
    beforeMount(){
        this.$uniRequest.get('/index_footer').then( res => {
            // 赋初始值
            let data = res.data
            this.formChangeData.Email1 = data.Email1 
            this.formChangeData.SalesTel = data.SalesTel
            this.formChangeData.Address = data.Address
            this.formChangeData.u_id = this.$store.state.userInfo.id
        }).catch( res => {
            console.log(res)
        })
    },
    methods:{
        comfirm:function(){
            // console.log(this.formChangeData)
            this.$uniRequest.post('/UpdateContact',{
                ...this.formChangeData
            }).then( res => {
                if(res.data.success){
                    uni.showToast({
                        title: res.data.message,
                        icon:"success",
                        duration: 2000
                    });
                    // 刷新页面
                    setTimeout(()=>{
                        uni.redirectTo({
                            url: '/pages/about/admin/modifyContact/modifyContact'
                        });
                    },300)
                    
                }else{
                    uni.showToast({
                        title: res.data.message,
                        icon:"none",
                        duration: 2000
                    });
                }
            })
                    
        }
    },
    watch: {
        'formChangeData.Email1'(val,olval){
            this.emailV = val.length <= 20 && val.length >5
        },
        'formChangeData.SalesTel'(val,olval){
            this.telV = val.length == 11
        },
        'formChangeData.Address'(val,olval){
            this.addressV = val.length > 1
        }
    },
}
</script>

<style>
    .changeContactPane{
        width: 600rpx;
        height: 700rpx;
        background-color: darkkhaki;
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