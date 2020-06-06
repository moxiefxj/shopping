<template>
    <view>
        删除条目
        <view v-for="(item,index) in productList" :key="index">
            <text>{{item.categories}}</text>
        </view>
    </view>
</template>

<script>
export default {
    props:['productList']
}
</script>