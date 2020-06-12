<template>
    <view v-if="productlist != null">
        <view class="productCard" v-for="(item, index) in productlist" :key="index"  @tap="detailProduct(item.id)">
            <product-com :item = "item"></product-com>
        </view>
    </view>
    <view v-else>
        <image class="notfind" src = 'https://cdn.u1.huluxia.com/g4/M03/68/F2/rBAAdl7iVDqAYAARAAB5Bwjihs0908.jpg' />
    </view>

</template>

<script>
import productCom from '../../../components/productCom.vue'
export default {
    components:{
        productCom
    },
    data() {
        return {
            productlist:[],
            next_page_url:""
        }
    },
    onLoad:function(data){
        console.log(data)
        this.$uniRequest.post('/BusinessSearch',{
            key_word : data.data
        }).then( res => {
            this.searchDetail(res.data)
            console.log(res)
            // 修改iamge路径
            
        })
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
        },
        searchDetail:function(data){
            console.log(data)
            if(data.data.length == 0){
                // 跳转什么都没有的页面
                this.productlist = null
                this.next_page_url = null
            }
            else{
                this.productlist = data.data 
                this.next_page_url = data.next_page_url
                this.productlist.forEach(element => {
                    element.cover_img = this.$imageUrl + element.cover_img 
                });
            }

        } 
    },
}
</script>

<style scoped>
    .notfind{
        width: 580rpx;
        height: 518rpx;
        margin-top: 150rpx;
        margin-left: 80rpx;

    }
</style>