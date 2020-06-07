<template>
    <view class="detail_page">
        <!-- 图片  -->
        <image class="Detail_image" :src="productDetail.cover_img" />

        <view class="detail">
            <!-- 商品价格 -->
            <view class="productPrice">{{productDetail.price}} </view>
            <!-- 商品类别 -->
            <text class="productClass">{{productDetail.categories}}</text>
            <!-- 商品题目  -->
            <text class="title">{{productDetail.name}}</text>
            <!-- 商品描述 -->
            <view class="description">{{productDetail.describe}}</view>

            <!-- 发布时间 -->
            <view>发布时间:{{productDetail.time}}</view>
        </view>
        <!-- 支付与返回 -->
        <view class="pay">
            <button class="btn_pay" @click="pay" type="primary" size="mini">立即购买</button>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            productDetail:[],
            payData:{
                u_id:"",
                business_id:""
            }
        }
    },
    onLoad:function(id){
        // 拿到数据
        console.log(id)
        this.payData.business_id = id.id
        // 根据id查找数据
        let reqUrl = "/Business/" + id.id
        this.$uniRequest.get(reqUrl).then(res => {
            this.productDetail = res.data
            console.log(this.productDetail)
            // 修改iamge路径
            this.productDetail.cover_img = this.$imageUrl + this.productDetail.cover_img
            // .forEach(element => {
            //     element.cover_img = this.$imageUrl + element.cover_img 
            // });
        }).catch(res => {
            console.log(res)
        })
    },
    methods:{
        pay(){
            this.payData.u_id = this.$store.state.userInfo.id
            // u_id 商品id
            this.$uniRequest.post('/Pay',{
                ...this.payData
            }).then( res => {
                console.log(res)
                uni.showToast({
                    title: res.data.message,
                    duration: 2000
                });
            }).catch( res =>{
                console.log(res)
            })
        }
    }
}
</script>

<style scoped>
    .detail_page{
        background-color: #F5F5F5;
    }
    .Detail_image{
        width: 720rpx;
        height: 720rpx;
        margin: 14rpx;
    }
    .detail{
        margin: 10rpx;
        background-color: #FFFFFF;
        border-radius: 10rpx;
    }
    .detail .productClass {
        font-size: 30rpx;
        font-weight: bold;
        
    }
    .detail .title{
        margin: 0 20rpx;
        font-size: 30rpx;
        font-weight: bold;
    }
    .detail .description{
        margin: 10rpx 0;
        padding-left: 20rpx;
        font-size: 30rpx;
    }
    .detail .productPrice{
        font-size: 50rpx;
    }
    .btn_pay{
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 20rpx;
    }
</style>