<template>
    <view >
        <!--搜索框  -->
        <van-search
            shape="round"
            background="#4fc08d"
            placeholder="请输入搜索关键词"
            @search="search"
        />
        <!-- 导航栏 -->
        <van-tabs v-model="active" animated  swipeable color="#4fc08d" sticky="true">
            <van-tab v-for="(item,index) in itemBar"  :key="index" :title="item.title">
                <view id = "listArea" v-if="!isSearch">
                    <product-view :productlist = "productlist"></product-view>
                </view>
                <view v-else>
                    <search-view :productlist = "productlist"></search-view>
                </view>
            </van-tab>
        </van-tabs> 
    </view>
</template>


<script>
import uniSearchBar from '@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.vue';
import productView from '../../index//product/product.vue'
import searchView from '../../index//product/search.vue'
import msTabs from '@/components/ms_tabs.vue'
export default {
    components: {uniSearchBar,productView,msTabs,searchView},
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
            active:0,
            productlist:[],
            categories:"",
            screenHeight:0,
            isLoading:false,
            height:0,
            bottomDistinct:200, //距离底部多少像素触发
            next_page_url:'',
        }
    },
    onPullDownRefresh() {
        this.setProductlist(this.active) 
    },
    onLoad(){
        this.screenHeight = uni.getSystemInfoSync().screenHeight
    },
    beforeMount() {
        this.setProductlist(this.active) 
    },
	methods: {
        setProductlist:function(active){
            switch (active) {
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
                    this.next_page_url = res.data.next_page_url
                    this.isSearch = false
                    // 修改iamge路径
                    this.productlist.forEach(element => {
                        element.cover_img = this.$imageUrl + element.cover_img 
                    });
                    // console.log(res)
                }).catch(res => {
                    console.log(res)
                })
            }
            else{
                this.$uniRequest.post('/Business/BusinessCategories',{
                    categories:this.categories
                }).then(res => {
                    this.productlist = res.data.data 
                    this.next_page_url = res.data.next_page_url
                    this.isSearch = false
                    // 修改iamge路径
                    this.productlist.forEach(element => {
                        element.cover_img = this.$imageUrl + element.cover_img 
                    });
                    // console.log(this.productlist)
                }).catch(res => {
                    console.log(res)
                })
            }
            
            
            
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
            query.select("#listArea").boundingClientRect(data => {
                let height_t = data.height;
                if(this.bottomDistinct >= this.height - this.screenHeight - scrollTop && this.height != height_t){
                    // uni.showNavigationBarLoading()
                    this.isLoading = true
                    this.height = height_t
                    setTimeout( ()=>{
                    if(this.next_page_url == null){
                        uni.showToast({
                            title: '没有更多啦',
                            duration: 1000,
                            icon:"none"
                        });
                    }else{
                        this.getLastPage() 
                    }
                    this.isLoading = false  
                        },1000) 
                } 
            }).exec();
        },
        getLastPage:function(){
            this.$uniRequest.get(this.next_page_url).then( res => {
                this.next_page_url = res.data.next_page_url
                res.data.data.forEach(element => {
                    element.cover_img = this.$imageUrl + element.cover_img 
                });
                this.productlist = this.productlist.concat(res.data.data)
                
            }).catch( res => {
                console.log(res)
            })  
        }, 
        search:function(e){
            uni.navigateTo({
                 url: '/pages/index/product/search?data='+e.detail
            });
        } 

    },
    watch: {
        active(ol,val){
            if(ol !== val){
                this.setProductlist(ol.detail.index)
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