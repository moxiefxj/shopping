<template>
    <view>
        <form>
            <!-- 简介标题 -->
            <view class="formItem">
                <label>简介标题</label>
                <input class="title" v-model="formData.title" type="text">
            </view>
            <!-- 简介详情 -->
            <view>
                <label>简介详情</label>
                <textarea class="xiangqing" v-model="formData.content"></textarea>
            </view>
            <view class="formItem">
                <button  @click="UpdateInformation">确定</button>
            </view>
        </form>
    </view>
</template>

<script>
export default {
    data() {
        return {
            formData:{
                title:'',
                content:'',
                u_id:""
            },
        }
    },
    beforeMount(){
        // 获取信息
        this.$uniRequest.get('/Information').then( res => {
            
            let data = res.data
            this.formData.title = data.title
            this.formData.content = data.content
            this.formData.u_id = this.$store.state.userInfo.id
        }).catch( res => {
            console.log(res)
        })
    },
    methods:{
        UpdateInformation:function(){
            // 提交表单
            this.$uniRequest.post('/UpdateInformation',{
                ...this.formData
            }).then( res => {
                uni.showToast({
                    title: res.data.message,
                    duration: 2000
                });
            }).catch( res => {
                console.log(res)
            })
        }
    }
}
</script>

<style scoped>
    .title{
        border:2rpx solid red;
    }
    .xiangqing{
        border:2rpx solid red;
        width: 700rpx;
        margin: 20rpx;
    }
    .formItem{
        display: flex;
    }
</style>