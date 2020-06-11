<template>
    <view v-if="productlist != null">
        <view class="productCard" v-for="(item, index) in productlist" :key="index"  @tap="detailProduct(item.id)">
            <product-com :item = "item"></product-com>
        </view>
    </view>
    <view v-else>
        <text>未找到</text>
    </view>

</template>

<script>
export default {
    props:["productlist"],
    methods: {
        detailProduct:function(id){
            console.log(id)
            let url = '/pages/index/detail/detail?id='+id

            uni.navigateTo({
                url: url,
                success: res => {
                    console.log("success")
                },
                fail: () => {
                    console.log("fail")
                },
                complete: () => {}
            })
            console.log(url)
        }
    },
}
</script>