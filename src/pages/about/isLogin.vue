<template>
    <view> 
        <view class="user">
            <!-- name -->
            <text class="name">欢迎回来,{{user.name}}!</text>
        </view>
        <list-com :list = "list" :_handleTap = "_handleTap"></list-com>
    </view>
</template>
<script>
import listCom from '../../components/listCom'
export default {
    components: {listCom},
    data() {
        return {
            list:[
                {
                    title:"我的订单"
                },{
                    title:"设置"
                }
            ],
            user:[]
        }
    },
    methods:{
        _handleTap:function(title){
            switch (title){
                case "产品中心":
                    uni.navigateTo({
                        url: '/pages/about/adminproduct/adminproduct'
                    }); 
                    break
                case "关于我们":
                    uni.navigateTo({
                        url: '/pages/about/adminAbout/adminAbout'
                    }); 
                    break
                case "我的订单":
                   uni.navigateTo({
                        url: '/pages/about/orderList/orderList'
                    }); 
                    break
                case "设置":
                    uni.navigateTo({
                        url: '/pages/about/settings/settings'
                    });
                    break
                default:
                    break
            }
        }
    },
    beforeMount() {
        this.user = this.$store.state.userInfo
        console.log(this.user)
        //判断身份,展示不同的list
         if(this.$store.state.userInfo.identity == 1){
             this.list.unshift({
                 title:"产品中心"
             },{
                 title:"关于我们"
             })
         }
        // if(true){
        //      this.list.unshift({
        //          title:"产品中心"
        //      },{
        //          title:"关于我们"
        //      })
        //  }
    },
}
</script>

<style>
    .user{
        background-color: #4fc08d;
        display: flex;
    }
    .name{
        padding: 20rpx;
        width: 300rpx;
        margin: 0 auto;
        text-align: center;
        align-self: center;
        font-size: 30rpx;
        font-weight: bold;
    }
</style>