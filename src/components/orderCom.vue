<template>
    <view class="listItem">
        <image />
        <view class="title_time">
            <view>title</view>
            <view>时间</view>
        </view>
    </view>
</template>

<style>
    .listItem{
        background-color: darkgreen;
        height: 200rpx;
        margin: 20rpx;
        display: flex;
    }
    image{
        background-color: darkmagenta;
        width: 150rpx;
        height: 150rpx;
        margin-left: 20rpx;
        align-self: center;
    }
    .title_time{
        margin: 0rpx;
    }
</style>