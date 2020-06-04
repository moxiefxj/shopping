<template>
    <view>
        详情页
    </view>
</template>

<script>
export default {
    onLoad:function(product){
        // 拿到数据
        let arr = JSON.parse(product.product)
        console.log(arr.cover_img)
    }
}
</script>