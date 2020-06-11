<template>

    <!-- 商品卡片 -->
    <view class="productCard">
        <!-- 商品图片 -->
        <image :src="item.cover_img"/>
        <view class="productDetail">
            <!-- 商品类别 -->
            <text class="productClass">{{item.categories}}</text>
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
    props:['item'],
}
</script>

<style scoped>
    image{
        width: 350rpx;
        height: 350rpx;
    }
    .productDetail{
        padding: 5rpx;
    }
    .productClass{
        background-color: cyan;
        border-radius: 20rpx;
        padding: 0 20rpx;
    }

</style>