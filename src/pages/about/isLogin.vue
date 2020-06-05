<template>
    <view> 
        <view class="P_I">
            <!-- 头像 -->
            <image class="image"/>
            <!-- name -->
            <text class="name">hello</text>
        </view>
        <uni-list>
            <!-- 订单信息栏-->
            <uni-list-item title="我的订单" @click="toOrderList"></uni-list-item>
            <uni-list-item title="设置" @click="toSettings"></uni-list-item>
        </uni-list>

        <!-- 退出栏 -->
        <view>
            
        </view>
    </view>
</template>
<script>
import uniList from "@dcloudio/uni-ui/lib/uni-list/uni-list.vue"
import uniListItem from "@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.vue"
export default {
    components: {uniList,uniListItem},
    methods:{
        toOrderList:function(){
            console.log("点击了")
            uni.navigateTo({
                 url: '/pages/about/orderList/orderList'
            });
        },
        toSettings:function(){
            uni.navigateTo({
                 url: '/pages/about/settings/settings'
            });
        }
    }
}
</script>

<style>
.P_I{
    background-color: indigo;
    display: flex;
}
    .image{
        width: 150rpx;
        height: 150rpx;
        border-radius: 100%;
        background-color: green;
        margin: 30rpx;
    }
    .name{
        background-color: hotpink;
        padding: 20rpx;
        width: 300rpx;
        height: 50rpx;
        align-self: center;
    }

</style>