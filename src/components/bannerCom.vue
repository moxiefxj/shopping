<template>
    <view>
        <swiper
            class="swiper"
            indicator-dots
            indicator-color="#c0c0c0"
            indicator-active-color="orange"
            autoplay
            interval="3000"
            circular>
            <swiper-item>
                <view class="swiper-item uni-bg-red">A</view>
            </swiper-item>
            <swiper-item>
                <view class="swiper-item uni-bg-red">B</view>
            </swiper-item>
        </swiper>
    </view> 
</template>
<style>
    swiper-item{
        background-color: cyan;
    }
    
</style>
