<template>
    <view v-if="hasOrder">
        <view id="listOrder" v-for="(item,index) in orderlist" :key="index" @click="toProduct(item.business_id)">
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
            hasOrder:false,
            totalPage:0,
            presentPage:0,

            screenHeight:0,
            isLoading:false,
            bottomDistinct:200,
        }
    },
    beforeMount() {
        // 获取订单列表
        this.$uniRequest.post('/order',{
            u_id:this.$store.state.userInfo.id
        }).then( res => {
            this.orderlist = res.data.data
            this.totalPage = res.data.totalPage
            this.presentPage = 1
            if(this.orderlist == null){
                this.hasOrder = false
            }else{
                this.hasOrder = true
                this.orderlist.forEach(element => {
                    element.cover_img = this.$imageUrl + element.cover_img
                });
            }
           
            // console.log(res)
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
        },
        onPageScroll : function(e){
            const scrollTop = e.scrollTop;
            
            // console.log(scrollTop)
            // 防止重复触发
            if(this.isLoading){
                return;
            }

            // 获取SelectorQuery 对象示例
            const query = uni.createSelectorQuery().in(this)

            // 为listArea 节点绑定查询请求
            query.select("#listOrder").boundingClientRect(data => {
                let height = data.height;
                if(this.bottomDistinct >= height - this.screenHeight - scrollTop){
                    console.log("hhhh")
                    this.isLoading = true
                    setTimeout(()=>{
                        // 判断totalPage的值
                        if(this.presentPage >= this.totalPage){
                            uni.showToast({
                                title: '没有更多啦',
                                duration: 1000,
                                icon:"none"
                            });
                        }
                        else{
                            // 加载下一页
                            let url = '/order/?page='+(this.presentPage+1)
                            this.$uniRequest.post(url,{
                                u_id:this.$store.state.userInfo.id
                            }).then( res => {
                                console.log(res)
                                let list = res.data.data
                                list.forEach(element => {
                                    element.cover_img = this.$imageUrl + element.cover_img
                                });
                                this.orderlist = this.orderlist.concat(list)
                            })
                        }
                    //     if(this.next_page_url == null){
                    //         uni.showToast({
                    //             title: '没有更多啦',
                    //             duration: 1000,
                    //             icon:"none"
                    //         });
                    //     }else{
                    //         // 获取下一页数据
                    //         this.$uniRequest.get(this.next_page_url).then( res => {
                    //             // console.log(res)
                    //             this.next_page_url = res.data.next_page_url
                    //             res.data.data.forEach(element => {
                    //                 element.cover_img = this.$imageUrl + element.cover_img 
                    //             });
                    //             this.productlist = this.productlist.concat(res.data.data)
                    //         }).catch( res => {
                    //             console.log(res)
                    //         })
                    //     }
                    //     this.isLoading = false
                    },300);
                }
            }).exec();
        }
    }
}
</script>