<template>
    <view class="detail_page">
        <!-- 图片  -->
        <image class="Detail_image" :src="productDetail.cover_img" />

        <view class="detail">
            <!-- 商品价格 -->
            <view class="productPrice">{{productDetail.price}} </view>
            <!-- 商品类别 -->
            <text class="productClass">{{categories}}</text>
            <!-- 商品题目  -->
            <text class="title">{{productDetail.name}}</text>
            <!-- 商品描述 -->
            <view class="description">{{productDetail.brief}}</view>
            <!-- 发布时间 -->
            <view>发布时间:</view>
        </view>
        <!-- 支付与返回 -->
        <view class="pay">
            <button class="btn_pay" type="primary" size="mini">立即购买</button>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            productDetail:[],
            categories:""
        }
    },
    onLoad:function(product){
        // 拿到数据
        let arr = JSON.parse(product.product)
        this.productDetail = arr
        this.categories = product.categories
        console.log(product)
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