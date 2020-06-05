<template>
    <view class="pages">
        <!--搜索框  -->
        <uni-search-bar></uni-search-bar>
        <!-- 导航栏 -->
        <ms-tabs :list="itemBar" v-model="active2" itemColor="#03A9F4" lineColor="#03A9F4" >
        </ms-tabs>
        <product-view :productlist = "productlist" ></product-view>
        <!-- 内容 -->
        
          
    </view>
</template>


<script>
import uniSearchBar from '@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.vue';
import productView from '../../index//product/product.vue'
import msTabs from '@/components/ms_tabs.vue'
export default {
    components: {uniSearchBar,productView,msTabs},
    data() {
        return {
            itemBar:[
                {
                    title:"全部"
                },
                {
                    title:'服饰'
                },
                {
                    title:'日用品'
                },
                {
                    title:'数码'
                },{
                    title:"图书"
                }
            ],
            active2:0,
            productlist:[],
            categories:""
        }
    },
    beforeMount() {
        this.setProductlist(this.active2) 
    },
	methods: {
        setProductlist:function(active2){
            switch (active2) {
                case 0:
                    this.categories = "all"
                    break;  // 全部的查询
                case 1:
                    this.categories = "clothing"
                    break;
                case 2:
                    this.categories = "dn"
                    break;
                case 3:
                    this.categories = "digital"
                    break;
                case 4:
                    this.categories = "book"
                    break;
                default:
                    break;
            }
            if(this.categories == "all"){
                this.$uniRequest.get('/Business').then(res => {
                    this.productlist = res.data.data
                    // 修改iamge路径
                    this.productlist.forEach(element => {
                        element.cover_img = this.$imageUrl + element.cover_img 
                    });
                    console.log(this.productlist)
                }).catch(res => {
                    console.log(res)
                })
            }
            else{
                this.$uniRequest.post('/Business/BusinessCategories',{
                    categories:this.categories
                }).then(res => {
                    this.productlist = res.data.data 
                    // 修改iamge路径
                    this.productlist.forEach(element => {
                        element.cover_img = this.$imageUrl + element.cover_img 
                    });
                    console.log(this.productlist)
                }).catch(res => {
                    console.log(res)
                })
            }
            
            
            
        }
    },
    watch: {
        active2(ol,val){
            if(ol !== val){
                this.setProductlist(ol)
            }
        }
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
        margin: 15rpx 0;
    }
</style>