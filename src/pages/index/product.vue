<template>
    <!-- 主页产品页 -->
    <view>
        <!-- 轮播图 -->
        <banner-com></banner-com>
        <!-- 产品卡片 -->
        <view>
            <product-com></product-com>
            <product-com></product-com>
            <product-com></product-com>
            <product-com></product-com>
        </view>
        
    </view>
</template>

<script>
import bannerCom from '../../components/bannerCom.vue'
import productCom from '../../components/productCom.vue';
export default {
    components:{
        bannerCom,
        productCom
    }
}
</script>