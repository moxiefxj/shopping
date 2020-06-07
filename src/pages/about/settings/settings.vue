<template>
    <view>
        <list-com :list = "list" :_handleTap = "_handleTap"></list-com>
    </view>
</template>

<script>
import listCom from '../../../components/listCom'
import {mapMutations} from 'vuex'
export default {
    components:{
        listCom
    },
    data() {
        return {
            list:[
                {
                    title:"修改密码"
                },{
                    title:"修改个人信息"
                },{
                    title:"退出"
                }
            ]
        }
    },
    methods:{
        ...mapMutations(['logout']),
        _handleTap:function(title){
            switch (title){
                case '修改密码':
                    // 修改密码
                    uni.navigateTo({
                         url: '/pages/about/changePwd/changePwd'
                    });
                    break;
                case '修改个人信息':
                    // 修改个人信息
                     uni.navigateTo({
                         url: '/pages/about/changeMsg/changeMsg'
                    });
                    break;
                case '退出':
                    // 退出
                    uni.showToast({
                        title: '注销成功',
                        duration: 2000
                    });
                    setTimeout( () =>{
                        getApp().logoutM()
                    },300) 
                    break;
                default:
                    break;
            }

            
        },
    }
}
</script>