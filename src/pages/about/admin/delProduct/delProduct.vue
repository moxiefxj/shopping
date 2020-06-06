<template>
    <view>
        <delproduct-com :productList = "productList"></delproduct-com>
    </view>
</template>

<script>
import delproductCom from "../../../../components/delproductCom"
export default {
    components:{
        delproductCom
    },
    data() {
        return {
            productList:[]
        }
    },
    beforeMount() {
        this.$uniRequest.get('/Business').then( res => {
            this.productList = res.data.data
        }).catch( res => {

        })
    },
}
</script>