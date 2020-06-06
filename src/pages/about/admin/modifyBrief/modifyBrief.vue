<template>
    <view>
        <form>
            <!-- 简介标题 -->
            <view class="formItem">
                <label>简介标题</label>
                <input class="title" type="text">
            </view>
            <!-- 简介详情 -->
            <view>
                <label>简介详情</label>
                <textarea class="xiangqing"></textarea>
            </view>
        </form>
    </view>
</template>

<style scoped>
    .title{
        background-color: cyan;
    }
    .xiangqing{
        background-color: darkgoldenrod;
        width: 200rpx;
    }
    .formItem{
        display: flex;
    }
</style>