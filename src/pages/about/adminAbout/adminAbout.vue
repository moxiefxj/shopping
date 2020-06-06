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
                    title:"修改联系方式"
                },{
                    title:"修改公司简介"
                }
            ]
        }
    },
    methods:{
        _handleTap:function(title){
            switch (title){
                case '修改联系方式':
                    // 修改联系方式
                    uni.navigateTo({
                         url: '/pages/about/admin/modifyContact/modifyContact'
                    });
                    break;
                case '修改公司简介':
                    // 修改公司简介
                     uni.navigateTo({
                         url: '/pages/about/admin/modifyBrief/modifyBrief'
                    });
                    break;
                default:
                    break;
            }

            
        }
    }
}
</script>