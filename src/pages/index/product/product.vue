<template>
    <!-- 主页产品页 -->
    <view>
        <!-- 轮播图 -->
        <banner-com></banner-com>
        <!-- 产品卡片 -->
        <view class="productCard" v-for="(item, index) in productlist" :key="index"  @tap="detailProduct(item.id)">
            <product-com :item = "item"></product-com>
        </view>
    </view>
</template>

<script>
import bannerCom from '../../../components/bannerCom'
import productCom from '../../../components/productCom.vue';
export default {
    components:{
        bannerCom,
        productCom
    },
    props:['productlist'],
    onLoad:function(res){
        console.log(res)
    },
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

<style>
    .productCard{
        width: 350rpx;
        height: 500rpx;
        margin: 10rpx;
        background-color: #FFFFFF;
        display: inline-block;
        border-radius: 10rpx;
    }
</style>