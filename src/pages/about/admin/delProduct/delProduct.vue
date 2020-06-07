<template>
    <view>
        <view v-for = "(item,index) in productList" :key="index"> 
            <order-com :item="item"></order-com>
        </view>
        
    </view>
</template>

<script>
import orderCom from "../../../../components/orderCom"
export default {
    components:{
        orderCom
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