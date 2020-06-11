<template>
    <view class="changeBriefPane">
        <form class="form">
            <!-- 简介标题 -->
            <view class="formItem">
                <label>简介标题</label>
                <input class="title" v-model="formData.title" type="text" placeholder="请输入简介标题">
            </view>
            <!-- 简介详情 -->
            <view class="formItem">
                <label>简介详情</label>
                <textarea class="xiangqing" v-model="formData.content" maxlength="150" adjust-position="false" placeholder="请输入简介详情"></textarea>
            </view>
            <view class="formItem">
                <button  @click="UpdateInformation" type="primary">确定</button>
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
            }
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
    .changeBriefPane{
        width: 600rpx;
        height: 700rpx;
        background-color: #4fc08d;
        margin: 200rpx auto;
        padding: 50rpx 0;
        border-radius: 20rpx;
    }
    .form{
        margin: 30rpx 0;
    }
    .title{
        border: 8rpx solid green;
        margin-left: 50rpx;
        border-radius: 20rpx;
        padding-left: 20rpx;
    }
    .xiangqing{
        border:8rpx solid greenyellow;
        margin: 20rpx;
        border-radius: 20rpx;
        padding: 30rpx;
        width: 80%;
    }
    .formItem{
        display: block;
    }
</style>