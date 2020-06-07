<template>
    <view class="listItem">
        <image :src="item.cover_img"/>
        <view class="name_time">
            <view class="name">{{item.name}}</view>
            <view class="time">{{item.time}}</view>
        </view>
        <button class="del" type="warn" @click="order_del(item.order_id)">删除</button>
    </view>
</template>

<script>
export default {
    props:['item','order_del'],
    created(){
        console.log(this.item)
    }
}
</script>

<style scoped>
    .listItem{
        background-color: rosybrown;
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
    .name_time{
        margin: 20rpx 30rpx;
    }
    .name{
        font-size: 20px;
        font-weight: bold;
    }
    .time{
    }
    .del{
        width: 128rpx;
        height: 80rpx;
        font-size: 30rpx;
        align-self: center;
    }
</style>