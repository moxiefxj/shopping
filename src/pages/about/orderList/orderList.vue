<template>
    <view v-if="hasOrder">
        <view v-for="(item,index) in orderlist" :key="index" @click="toProduct(item.business_id)">
            <order-com :item="item" :order_del = "order_del" ></order-com>
        </view>
        
    </view>
    <view v-else>
        <!-- 没有订单 -->
        <text>没有订单</text>
    </view>
</template>

<script>
import orderCom from '../../../components/orderCom'
export default {
    components:{
        orderCom
    },
    data() {
        return {
            orderlist:[],
            hasOrder:false
        }
    },
    beforeMount() {
        // 获取订单列表
        this.$uniRequest.post('/order',{
            u_id:this.$store.state.userInfo.id
        }).then( res => {
            this.orderlist = res.data.data
            if(this.orderlist == null){
                this.hasOrder = false
            }else{
                this.hasOrder = true
                this.orderlist.forEach(element => {
                    element.cover_img = this.$imageUrl + element.cover_img
                });
            }
           
            console.log(res)
        }).catch( res => {
            console.log(res)
        })
    },
    methods:{
        order_del:function(id){
            // 删除订单
            this.$uniRequest.post('/OrderCancel',{
                order_id:id
            }).then( res => {
                console.log(res)
                uni.showToast({
                    title: res.data.message,
                    duration: 2000
                });
                // 重定向到订单页
                uni.redirectTo({
                     url: '/pages/about/orderList/orderList'
                });
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
        }
    }
}
</script>