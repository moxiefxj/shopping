<template>
    <view>
        <view class="productCard" v-for = "(item,index) in productList" :key="index"> 
            <product-com :item = "item" ></product-com>
            <view :disabled = "isable">hahha</view>
        </view>
        
    </view>
</template>

<script>
import productCom from "../../../../components/productCom"
export default {
    components:{
        productCom
    },
    data() {
        return {
            productList:[],
            isable : false
        }
    },
    beforeMount() {
        this.$uniRequest.get('/Business').then( res => {
            this.productList = res.data.data
            // 修改iamge路径
            this.productList.forEach(element => {
                element.cover_img = this.$imageUrl + element.cover_img 
            });
        }).catch( res => {

        })
    },
    methods:{
    }
}
</script>

<style>

</style>