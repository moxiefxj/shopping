<template>
    <view> 
        <view class="P_I">
            <!-- 头像 -->
            <image class="image"/>
            <!-- name -->
            <text class="name">hello</text>
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
            ]
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
.P_I{
    background-color: indigo;
    display: flex;
}
    .image{
        width: 150rpx;
        height: 150rpx;
        border-radius: 100%;
        background-color: green;
        margin: 30rpx;
    }
    .name{
        background-color: hotpink;
        padding: 20rpx;
        width: 300rpx;
        height: 50rpx;
        align-self: center;
    }

</style>