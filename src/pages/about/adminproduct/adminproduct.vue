<template>
    <view>
        <list-com :list = "list" :_handleTap = "_handleTap"></list-com>
    </view>
</template>

<script>
import listCom from '../../../components/listCom'
export default {
    components:{
        listCom
    },
    data() {
        return {
            list:[
                {
                    title:"添加产品"
                },{
                    title:"删除产品"
                },{
                    title:"修改产品"
                }
            ]
        }
    },
    methods:{
        _handleTap:function(title){
            switch (title){
                case '添加产品':
                    // 添加产品
                    uni.navigateTo({
                         url: '/pages/about/admin/addProduct/addProduct'
                    });
                    break;
                case '删除产品':
                    // 删除产品
                     uni.navigateTo({
                         url: '/pages/about/admin/delProduct/delProduct'
                    });
                    break;
                case '修改产品':
                    // 修改产品
                    uni.navigateTo({
                         url: '/pages/about/admin/modifyProduct/modifyProduct'
                    });
                    break;
                default:
                    break;
            }

            
        }
    }
}
</script>