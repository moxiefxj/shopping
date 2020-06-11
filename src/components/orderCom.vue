<template>
    <view class="listItem">
        <image :src="item.cover_img"/>
        <view class="name_time" @click="toProduct(item.business_id)">
            <view class="name">{{item.name}}</view>
            <view class="time">{{item.time}}</view>
        </view>
        <button class="del" type="warn" @click="order_del(id)">删除</button>
    </view>
</template>

<script>
export default {
    props:['item','order_del','toProduct'],
    data() {
        return {
            id:""
        }
    },
    created(){
        console.log(this.item)
        if(this.item.order_id){
            this.id = this.item.order_id
        }else{
            this.id = this.item.id
        }
        console.log(this.id)
    }
}
</script>

<style scoped>
    .listItem{
        background-color: #E0F2F1;
        height: 200rpx;
        margin: 20rpx;
        display: flex;
    }
    image{
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
        width: 100rpx;
        height: 55rpx;
        font-size: 23rpx;
        align-self: center;
    }
</style>