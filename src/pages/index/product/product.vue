<template>
    <!-- 主页产品页 -->
    <view>
        <!-- 轮播图 -->
        <banner-com></banner-com>
        <!-- 产品卡片 -->
        <view class="productCard" v-for="(item, index) in productlist" :key="index"  @tap="detailProduct(item)">
            <product-com :item = "item" :categories = "categories" ></product-com>
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
    props:['productlist','categories'],
    data() {
        return { 
            product:[],
        }
    },
    onLoad:function(res){
        console.log(res)
    },
    methods: {
        detailProduct:function(item){
            console.log(item)
            let url = '/pages/index/detail/detail?product='+JSON.stringify (item)
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