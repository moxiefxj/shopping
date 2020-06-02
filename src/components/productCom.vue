<template>
    <!-- 商品卡片 -->
    <view class="productCard">
        <!-- 商品图片 -->
        <image :src="imageUrl + item.cover_img"/>
        <view class="productDetail">
            <!-- 商品类别 -->
            <text class="productClass">{{categories}}</text>
            <!-- 商品题目 -->
            <text class="title">{{item.name}}</text>
        </view>
        <!-- 商品价格 -->
        <view class="productPrice">
            <text>{{item.price}}</text>
        </view>
    </view>
</template>

<script>
export default {
    props:['item','categories'],
    data() {
        return {
            imageUrl:"http://39.100.241.104:8010/"
        }
    },
}
</script>

<style>
    
    image{
        width: 350rpx;
        height: 350rpx;
        border-radius: 10rpx;
    }
    .productDetail{
        padding: 5rpx;
    }
    .productClass{
        background-color: cyan;
        border-radius: 20rpx;
        padding: 0 20rpx;
    }
    .productPrice{
        margin: 10rpx;
        color: red;
    }
</style>