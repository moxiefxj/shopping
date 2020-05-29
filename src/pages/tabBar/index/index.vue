<template>
    <view class="pages">
        <!--搜索框  -->
        <uni-search-bar ></uni-search-bar>
        <view class="itemsBar">
                <view class="itemBar" v-for="(item, index) in itemBar" :key="index">
                    {{item}}
                </view>
        </view>
        <!-- 产品 product -->
        <!-- 需要传递产品信息   根据点击的tabBar -->
        <product-view></product-view>
          
    </view>
</template>


<script>
import uniSearchBar from '@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.vue';
import productView from '../../index/product.vue'
export default {
    components: {uniSearchBar,productView},
    data() {
        return {
            itemBar:['全部','服饰','电子产品','运动']
        }
    },
	methods: {
		
	},
}
</script>
<style>
    .itemsBar{
        margin: 0 40rpx;
        /* background-color: cyan; */
        display:flex;
        justify-content: space-between;
    }
    .itemBar{
        display: inline-block;
    }
</style>