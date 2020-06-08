<template>
    <view class="pages">
        <!--搜索框  -->
        <uni-search-bar @confirm="search"></uni-search-bar>
        <!-- 导航栏 -->
        <ms-tabs :list="itemBar" v-model="active2" itemColor="#03A9F4" lineColor="#03A9F4" >
        </ms-tabs>
        <view id = "listArea">
            <product-view :productlist = "productlist" ></product-view>
        </view>
        
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
            categories:"",
            screenHeight:0,
            isLoading:false,
            bottomDistinct:200, //距离底部多少像素触发
            next_page_url:'',
        }
    },
    onLoad(){
        this.screenHeight = uni.getSystemInfoSync().screenHeight
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
                    this.next_page_url = res.data.next_page_url
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
                let height = data.height;
                if(this.bottomDistinct >= height - this.screenHeight - scrollTop){
                    this.isLoading = true
                    setTimeout(()=>{
                        if(this.next_page_url == null){
                            uni.showToast({
                                title: '没有更多啦',
                                duration: 1000,
                                icon:"none"
                            });
                        }else{
                            // 获取下一页数据
                            this.$uniRequest.get(this.next_page_url).then( res => {
                                // console.log(res)
                                this.next_page_url = res.data.next_page_url
                                res.data.data.forEach(element => {
                                    element.cover_img = this.$imageUrl + element.cover_img 
                                });
                                this.productlist = this.productlist.concat(res.data.data)
                            }).catch( res => {
                                console.log(res)
                            })
                        }
                        this.isLoading = false
                    },300);
                }
            }).exec();
        },
        search:function(e){
            this.$uniRequest.post('/BusinessSearch',{
                key_word : e.value
            }).then( res => {
                console.log("搜索结果：")
                console.log(res)
            })
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