<template>
    <view>
        <view v-for = "(item,index) in productList" :key="index"> 
            <order-com :item="item" :order_del = "order_del" :toProduct="toProduct"></order-com>
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
        order_del:function(id){
            // 删除订单
            this.$uniRequest.post('/BusinessDelete',{
                id:id,
                u_id:this.$store.state.userInfo.id
            }).then( res => {
                console.log(res)
                uni.showToast({
                    title: res.data.message,
                    duration: 2000
                });
                setTimeout( () => {
                    // 重定向
                uni.redirectTo({
                     url: '/pages/about/admin/delProduct/delProduct'
                });
                },300)
                
            }).catch( res => {
                console.log(res)
            })
        },
        toProduct:function(business_id){
            console.log("toProduct")
            let url = '/pages/index/detail/detail?id='+business_id

            uni.reLaunch({
                url: url,
                success: res => {
                    console.log("success")
                },
                fail: () => {
                    console.log("fail")
                },
                complete: () => {}
            })
        },
    }
}
</script>

<style>

</style>