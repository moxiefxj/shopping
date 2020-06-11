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
            <swiper-item v-for="(item,index) in items" :key="index">
                <view class="swiper-item">{{item}}</view>
            </swiper-item>
        </swiper>
    </view> 
</template>

<script>
export default {
    data() {
        return {
            items:[
                "item1",
                "item2"
            ]
        }
    },
}
</script>

<style>
    swiper-item{
        background-color: cyan;
    }
    
</style>
